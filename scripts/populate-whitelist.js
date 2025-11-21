// Script to populate whitelist from CSV file
// 
// Usage:
//   node scripts/populate-whitelist.js              # Run the script
//   node scripts/populate-whitelist.js --dry-run    # Preview data without writing to Firestore
//
// Requirements:
//   - CSV file: AGV PROTOCOL 29U NFT DROP.csv in project root
//   - Environment variables: FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL
//
// CSV Format:
//   - Column 1: Timestamp
//   - Column 2: Username (email)
//   - Column 3: Wallet address (must start with 0x)
//   - Column 4: Discord username

// Load environment variables
require('dotenv').config();

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin using environment variables
// Make sure to set FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL in your .env file
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

if (!serviceAccount.projectId || !serviceAccount.privateKey || !serviceAccount.clientEmail) {
  console.error('Missing Firebase environment variables. Please set:');
  console.error('- FIREBASE_PROJECT_ID');
  console.error('- FIREBASE_PRIVATE_KEY');
  console.error('- FIREBASE_CLIENT_EMAIL');
  process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// Function to parse CSV data
function parseCSV(csvContent) {
  const lines = csvContent.split('\n');
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      const values = lines[i].split(',').map(value => value.replace(/"/g, '').trim());
      if (values.length >= 4 && values[2] && values[2].startsWith('0x')) {
        // Validate wallet address format
        data.push({
          timestamp: values[0],
          username: values[1],
          walletAddress: values[2],
          discordUsername: values[3]
        });
      } else if (values.length >= 4) {
        console.warn(`Skipping invalid entry at line ${i + 1}: ${values[2]}`);
      }
    }
  }
  
  return data;
}

async function populateWhitelist() {
  try {
    console.log('Starting whitelist population from CSV...');
    
    // Read CSV file
    const csvPath = path.join(__dirname, '..', 'AGV PROTOCOL 29U NFT DROP.csv');
    
    if (!fs.existsSync(csvPath)) {
      console.error('CSV file not found:', csvPath);
      process.exit(1);
    }
    
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const whitelistData = parseCSV(csvContent);
    
    console.log(`Found ${whitelistData.length} valid entries in CSV file`);
    
    if (whitelistData.length === 0) {
      console.log('No valid entries found. Exiting.');
      return;
    }
    
    // Check for dry run mode
    const isDryRun = process.argv.includes('--dry-run');
    if (isDryRun) {
      console.log('DRY RUN MODE - No data will be written to Firestore');
      console.log('Sample entries:');
      whitelistData.slice(0, 5).forEach((entry, index) => {
        console.log(`${index + 1}. ${entry.username} - ${entry.walletAddress} - ${entry.discordUsername}`);
      });
      return;
    }
    
    // Process in batches of 500 (Firestore batch limit)
    const batchSize = 500;
    let processedCount = 0;
    
    for (let i = 0; i < whitelistData.length; i += batchSize) {
      const batch = db.batch();
      const batchData = whitelistData.slice(i, i + batchSize);
      
      batchData.forEach((entry, index) => {
        const docRef = db.collection('buy_whitelisted_wallets').doc(`wallet_${i + index}`);
        batch.set(docRef, {
          timestamp: entry.timestamp,
          username: entry.username,
          walletAddress: entry.walletAddress.toLowerCase(),
          discordUsername: entry.discordUsername,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
      
      await batch.commit();
      processedCount += batchData.length;
      console.log(`Processed ${processedCount}/${whitelistData.length} entries...`);
    }
    
    console.log(`Successfully added ${processedCount} addresses to whitelist`);
    
  } catch (error) {
    console.error('Error populating whitelist:', error);
    process.exit(1);
  }
}

// Run the script
populateWhitelist();
