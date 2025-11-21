// Script to export all whitelisted wallet addresses to CSV
// 
// Usage:
//   node scripts/export-whitelist.js              # Export to whitelisted_wallets.csv
//   node scripts/export-whitelist.js output.csv   # Export to custom filename
//
// Requirements:
//   - Environment variables: FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL

// Load environment variables
require('dotenv').config();

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin using environment variables
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

async function exportWhitelist() {
  try {
    console.log('Starting whitelist export...');
    
    // Get output filename from command line or use default
    const outputFilename = process.argv[2] || 'whitelisted_wallets.csv';
    const outputPath = path.join(__dirname, '..', outputFilename);
    
    // Fetch all documents from buy_whitelisted_wallets collection
    console.log('Fetching wallets from buy_whitelisted_wallets collection...');
    const whitelistRef = db.collection('buy_whitelisted_wallets');
    const snapshot = await whitelistRef.get();
    
    if (snapshot.empty) {
      console.log('No wallets found in the collection.');
      return;
    }
    
    console.log(`Found ${snapshot.size} documents`);
    
    // Extract wallet addresses
    const walletAddresses = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.walletAddress) {
        walletAddresses.push(data.walletAddress);
      } else {
        console.warn(`Document ${doc.id} does not have walletAddress field`);
      }
    });
    
    console.log(`Extracted ${walletAddresses.length} wallet addresses`);
    
    // Create CSV content with header
    const csvHeader = 'walletAddress\n';
    const csvRows = walletAddresses.map(address => address).join('\n');
    const csvContent = csvHeader + csvRows;
    
    // Write to file
    fs.writeFileSync(outputPath, csvContent, 'utf8');
    
    console.log(`\n✓ Successfully exported ${walletAddresses.length} wallet addresses to: ${outputPath}`);
    console.log(`\nFirst 5 addresses:`);
    walletAddresses.slice(0, 5).forEach((addr, index) => {
      console.log(`  ${index + 1}. ${addr}`);
    });
    
  } catch (error) {
    console.error('Error exporting whitelist:', error);
    process.exit(1);
  }
}

// Run the script
exportWhitelist()
  .then(() => {
    console.log('\nExport completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\nExport failed:', error);
    process.exit(1);
  });



