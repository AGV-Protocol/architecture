# Claim Page Implementation Checklist

## Overview
Complete redesign of the claim page with 8 required modules, referral system, leaderboards, and Discord OAuth verification.

**Platform**: Vercel  
**Status**: ✅ Ready for Implementation

---

## 📋 Quick Summary

### Key Features:
1. **8 Required Modules**: Top Banner, Connect Wallet, Social Verification, Claim Button, Purchase Prompt, Referral Module, Community CTA, Leaderboard
2. **Discord OAuth**: Implement OAuth 2.0 flow (not bot) - use placeholders for credentials
3. **Referral System**: Wallet-based referrals from claim page, separate from KOL referrals
4. **Leaderboards**: 4 types (KOL, Referral, Buyer, Activation) with weekly reset
5. **Export Automation**: Vercel Cron Jobs + Brevo API email delivery

### Technical Stack:
- **Platform**: Vercel
- **Cron Jobs**: Vercel Cron Jobs (native feature)
- **Email**: Brevo API
- **OAuth**: Discord OAuth 2.0
- **Timezone**: UTC for all server operations

### Environment Variables Needed:
```
DISCORD_CLIENT_ID= (placeholder)
DISCORD_CLIENT_SECRET= (placeholder)
DISCORD_GUILD_ID= (placeholder)
BREVO_API_KEY= (you have this)
```

---

## 📋 MODULE 1: Top Banner (FOMO Trigger)
- [ ] Create prominent banner at top of claim page
- [ ] Display title: "20,000 Wallets Applied — Claim Your Airdrop Now (48 Hours Only)"
- [ ] Display subtext: "Only verified wallets can claim. Complete the steps below."
- [ ] Style with urgency/scarcity design (red/orange gradient, countdown feel)
- [ ] Make it visually prominent and attention-grabbing

---

## 📋 MODULE 2: Connect Wallet (First Required Step)
- [ ] Display "Connect Wallet" button when wallet not connected
- [ ] After connection, show: "Wallet Detected → Checking eligibility…"
- [ ] Auto-detect wallet connection status
- [ ] Show wallet address in masked format (0xA3…F9) when connected
- [ ] Ensure this is the entry gateway for all users

---

## 📋 MODULE 3: Social Verification Module (Auto or Semi-Auto)
- [ ] Display status for each platform:
  - Follow X → Verified / Not Verified
  - Join Discord → Verified / Not Verified
- [ ] If NOT verified, show action buttons:
  - "Follow Now" (for X)
  - "Join Discord" (for Discord)
  - "Verify Again" (refresh verification status)
- [ ] **Discord OAuth Verification** (IMPLEMENT NOW):
  - [ ] Implement Discord OAuth 2.0 integration
  - [ ] User clicks "Join Discord" → redirects to Discord OAuth
  - [ ] Discord OAuth flow:
    1. User authorizes app
    2. Get Discord user info (user ID, username)
    3. Verify user is member of required Discord server
    4. Link Discord user ID to wallet address
    5. Store verification in database
  - [ ] Update verification status in real-time
  - [ ] Store verification status in backend/database
  - [ ] Handle OAuth callback and token exchange
- [ ] **X Verification** (Keep existing):
  - [ ] Keep current X verification method (no changes)
- [ ] Block claim button until both verifications are complete
- [ ] Purpose: Filter bots, drive users into Discord, build community

---

## 📋 MODULE 4: Claim Button (Unlocks After Verification)
- [ ] Display "Claim Airdrop" button
- [ ] Button is disabled until:
  - Wallet is connected
  - Discord verification is complete
  - X verification is complete
  - User has eligible allocation
- [ ] After successful claim, show success message:
  - "Airdrop Reserved for Your Wallet."
- [ ] This is the reward moment to keep users engaged

---

## 📋 MODULE 5: Purchase Prompt (Most Important Conversion Element)
- [ ] Display after successful claim (PERSISTS on page):
  - Title: "Step 4 — Buy Pre-Token at $0.005 (48h Price Freeze)"
  - Subtext: "Your bonus reward unlocks only after a minimum buy of $20."
- [ ] Show "Buy Now (Highly Recommended)" button
- [ ] Button text: "Buy $20 Now"
- [ ] Add trust line: "Price increases after 48 hours. Early buyers get priority."
- [ ] **Redirect to buy page** (NOT on claim page)
- [ ] **PERSISTENT**: Module should remain visible on page (not just show once)
- [ ] This is the conversion moment: claim excitement → $20 purchase

---

## 📋 MODULE 6: Referral Module (Automatic Viral Loop)
- [ ] Display after successful claim:
  - Title: "Invite & Earn More Airdrop"
  - Subtext: "Share your link — every friend who buys ≥ $20 gives you extra rewards."
- [ ] Generate referral link using **wallet address** (not KOL ID)
  - Format 1: `https://agvprotocol.org/buy?ref={walletAddress}`
  - Format 2: `https://agvprotocol.org/buy/wallet/{walletAddress}` (new path pattern)
- [ ] Display referral link in readable format
- [ ] Add "Copy Referral Link" button
- [ ] Show small line: "Top referrers will appear on the leaderboard."
- [ ] **Track referrals by wallet address** (for claimers)
- [ ] **All referrals redirect to buy page** with ref parameter
- [ ] Purpose: Trigger viral sharing + more conversions

---

## 📋 MODULE 7: Community CTA (Retention Must-Have)
- [ ] Fixed buttons at bottom of page:
  - "Join Discord Community" button
  - "Follow X for Updates" button
- [ ] Keep users engaged after claim
- [ ] Prevent "claim and disappear" behavior

---

## 📋 MODULE 8: Leaderboard (FOMO Module)
- [ ] Display on claim page:
  - **Referral Leaderboard** (for claimers who refer buyers)
  - Show top referrers based on amount spent by their referrals
- [ ] Display metrics:
  - Total Claimed: X / 20,000
  - Remaining Supply Bar (visual progress)
- [ ] **Total Claimed Counter**:
  - **Real-time** updates from database
  - Source: Database (as we're recording all claims)
  - Update on page load and periodically refresh
- [ ] Show masked addresses (0xA3…F9 format)
- [ ] Purpose: Trigger competitive FOMO → more buying

---

## 🔄 REFERRAL SYSTEM ARCHITECTURE

### Referral Tracking Logic
- [ ] **Claimer Referrals** (from claim page):
  - Use wallet address as referral identifier
  - Link formats: 
    - `/buy?ref={walletAddress}` (query parameter)
    - `/buy/wallet/{walletAddress}` (path pattern)
  - Track in database: `referrerWallet` field
  - Separate from KOL referrals
  
- [ ] **KOL Referrals** (existing system):
  - Use KOL ID as referral identifier
  - Link formats:
    - `/buy?kolId={kolId}` (query parameter)
    - `/buy/kol/{kolId}` (path pattern)
  - Track in database: `kolId` field
  - Separate from claimer referrals

- [ ] **Referral Priority Logic**:
  - **Priority depends on which link is used**:
    - If user uses `/buy/wallet/{walletAddress}` or `/buy?ref={walletAddress}` → Record as wallet referral
    - If user uses `/buy/kol/{kolId}` or `/buy?kolId={kolId}` → Record as KOL referral
  - No warning needed if both are present - use the link that was actually used
  - Rewards cannot overlap (one referral per purchase)

- [ ] **Buy Page Integration**:
  - Create dynamic routes:
    - `/buy/wallet/[address]/page.tsx` - for wallet referrals
    - `/buy/kol/[kolId]/page.tsx` - for KOL referrals (or update existing)
  - Accept both `ref` (wallet) and `kolId` query parameters
  - Path patterns take priority over query parameters
  - Priority: Use whichever referral link was actually used
  - Record purchase with appropriate referrer type
  - Track purchase amount for referral calculations

### Referral Calculation
- [ ] **Referral Leaderboard Ranking**:
  - Based on **total amount spent** by all referred users
  - Not just number of referrals, but total USD value
  - Formula: Sum of all `purchaseAmount` from users referred by this wallet

- [ ] **KOL Referral Leaderboard Ranking**:
  - Based on **total amount spent** by all referred users
  - Sum of all `purchaseAmount` from users referred by this KOL ID

---

## 📊 LEADERBOARD SYSTEM

### Leaderboard Types (4 Total)
1. **KOL Referral Leaderboard**
   - Top 10 KOLs
   - Ranked by total amount spent by referrals
   - Weekly reset
   - Show on: Home page, Balance page

2. **Referral Leaderboard** (Claimer Referrals)
   - Top 20 referrers
   - Ranked by total amount spent by referrals
   - Weekly reset
   - Show on: Claim page, Home page, Balance page

3. **Buyer Leaderboard**
   - Top buyers by purchase amount
   - Show on: Buy page, Home page, Balance page

4. **Activation Leaderboard**
   - Top users by activation metrics
   - Show on: Home page, Balance page

### Leaderboard Display Rules
- [ ] **Claim Page**: Show Referral Leaderboard only
- [ ] **Buy Page**: Show Buyer Leaderboard only
- [ ] **Home Page**: Show all 4 leaderboards (with tabs or sections)
- [ ] **Balance Page**: Show all 4 leaderboards (with tabs or sections)

### Weekly Reset System
- [ ] Implement weekly reset for KOL Referral Leaderboard
- [ ] Implement weekly reset for Referral Leaderboard
- [ ] Reset every Monday at 00:00 UTC
- [ ] **Timezone Handling**: 
  - ✅ **CONFIRMED**: Use UTC for all reset times
  - Store all timestamps in UTC
  - Display times in user's local timezone for UI
  - Server-side cron jobs run in UTC
- [ ] Archive previous week's data before reset
- [ ] Update leaderboard calculations after reset
- [ ] **No previous week display** - only show current week

---

## 📤 EXPORT FUNCTIONALITY

### Export Requirements
- [ ] **KOL Referral Export**:
  - Export top 10 KOLs
  - Format: **CSV only**
  - Include: KOL ID, Wallet, Total Referral Amount, Number of Referrals, Period
  - **Filename format**: `kol-referrals-week-{weekNumber}-{exportDate}.csv`
    - Example: `kol-referrals-week-42-2024-10-21.csv`
    - Week number: ISO week number
    - Export date: YYYY-MM-DD format

- [ ] **Referral Export** (Claimers):
  - Export top 20 referrers
  - Export **ALL referrers** who have referrals that spent ≥ $20
  - Format: **CSV only**
  - Include: Wallet Address, Total Referral Amount, Number of Referrals, Period
  - **Filename format**: `claim-referrals-week-{weekNumber}-{exportDate}.csv`
    - Example: `claim-referrals-week-42-2024-10-21.csv`
    - Week number: ISO week number
    - Export date: YYYY-MM-DD format

- [ ] **Export Automation**:
  - **Cron Job**: Automatically export at reset time (Monday 00:00 UTC)
  - Export both KOL and Claim referrals at same time
  - **Email Export**: Send CSV files via email using Brevo
    - From: `IR@agvprotocol.org`
    - To: `bd@agvprotocol.com`
    - Subject: `Referral Leaderboard Export - Week {weekNumber} - {date}`
    - Attachments: 
      - `kol-referrals-week-{weekNumber}-{exportDate}.csv`
      - `claim-referrals-week-{weekNumber}-{exportDate}.csv`
  - Use Brevo API (not SMTP)
  - **No manual export endpoints needed** - fully automated
  - Track export history in database

---

## 🗄️ DATABASE SCHEMA UPDATES

### New Collections/Fields Needed
- [ ] **Claim Referrals Collection** (or extend existing):
  - `referrerWallet` (wallet address of claimer who referred)
  - `buyerAddress` (wallet address of person who bought)
  - `purchaseAmount` (USD amount spent)
  - `tokenAmount` (tokens purchased)
  - `txHash` (transaction hash)
  - `timestamp` (when purchase occurred)
  - `isKolReferral` (boolean: true if also a KOL referral)
  - `kolId` (optional: if referrer is also a KOL)

- [ ] **Weekly Leaderboard Snapshots**:
  - Store weekly leaderboard data before reset
  - Include: period, type, rankings, export data

- [ ] **Discord Verification** (OAuth):
  - Add `discordVerified` field to user document
  - Add `discordVerificationTime` timestamp
  - Add `discordUserId` (Discord user ID from OAuth)
  - Add `discordUsername` (optional: for display)
  - Link Discord account to wallet address

---

## 🔧 API ENDPOINTS TO CREATE/UPDATE

### New Endpoints
- [ ] `GET /api/claim-referral-leaderboard`
  - Returns top 20 claimer referrers
  - Ranked by total amount spent by referrals
  - Include weekly period filtering

- [ ] `GET /api/auth/discord` (OAuth initiation)
  - Redirects user to Discord OAuth authorization
  - Dynamically constructs redirect URI: `{currentDomain}/api/auth/discord/callback`
  - Includes state parameter (for CSRF protection)
  - Stores state in session/cookie for verification
  
- [ ] `GET /api/auth/discord/callback` (OAuth callback)
  - Handles Discord OAuth callback
  - Verifies state parameter (CSRF protection)
  - Exchanges authorization code for access token
  - Fetches Discord user info (user ID, username)
  - Verifies user is member of required Discord server (using `DISCORD_GUILD_ID`)
  - **If NOT in server**: Show error, redirect to claim page with error message
  - **If in server**: Link Discord account to wallet address, update verification status
  - Redirects back to claim page with success/error query parameter

- [ ] `GET /api/verify-discord-status`
  - Check current Discord verification status for user
  - Returns verification status and Discord user info

- [ ] `GET /api/cron/export-referrals` (Vercel Cron Job)
  - **Platform**: Vercel (deployed on Vercel)
  - **Solution**: Use Vercel Cron Jobs (native Vercel feature)
  - **Configuration**: Create `vercel.json` with cron schedule
  - **Schedule**: Every Monday at 00:00 UTC (cron: `0 0 * * 1`)
  - Triggered automatically by Vercel Cron every Monday 00:00 UTC
  - Verify request is from Vercel (check `x-vercel-signature` header)
  - Export KOL referrals (top 10) to CSV
  - Export Claim referrals (top 20 + all with ≥$20) to CSV
  - Generate CSV files with proper naming: `{type}-referrals-week-{weekNumber}-{date}.csv`
  - **Email via Brevo API**:
    - Use Brevo API (not SMTP)
    - Environment variable: `BREVO_API_KEY`
    - API endpoint: `https://api.brevo.com/v3/smtp/email`
    - Send email from `IR@agvprotocol.org` to `bd@agvprotocol.com`
    - Attach both CSV files as base64 encoded attachments
    - Subject: `Referral Leaderboard Export - Week {weekNumber} - {date}`
    - Include week number and date in email body
  - Track export history in database
  - Return success/error status
  - **vercel.json configuration**:
    ```json
    {
      "crons": [{
        "path": "/api/cron/export-referrals",
        "schedule": "0 0 * * 1"
      }]
    }
    ```

### Updated Endpoints
- [ ] `POST /api/users` (record-purchase action)
  - Accept `referrerWallet` parameter (wallet address)
  - Track claimer referrals separately from KOL referrals
  - Handle both referral types in same purchase

- [ ] `GET /api/users?type=referral`
  - Update to return claimer referral leaderboard
  - Rank by total amount spent by referrals

---

## 🎨 UI/UX REQUIREMENTS

### Design Consistency
- [ ] Match existing design system
- [ ] Use existing color scheme and components
- [ ] Ensure mobile responsiveness
- [ ] Smooth transitions between states

### User Flow
1. User lands on claim page → sees FOMO banner
2. User connects wallet → sees eligibility check
3. User verifies Discord → OAuth confirms membership
4. User verifies X → existing method
5. User claims airdrop → success message
6. User sees purchase prompt → redirects to buy page
7. User sees referral module → copies link
8. User sees leaderboard → FOMO trigger

---

## 🔐 DISCORD OAUTH INTEGRATION

### OAuth Requirements
- [ ] **Discord OAuth 2.0 Setup**:
  - Use environment variables (placeholders for now):
    - `DISCORD_CLIENT_ID`
    - `DISCORD_CLIENT_SECRET`
    - `DISCORD_GUILD_ID` (server ID to verify membership)
  - Set redirect URI: `/api/auth/discord/callback` (relative path, works in all environments)
  - Dynamically construct full redirect URI based on current domain
  - Request OAuth scopes: `identify`, `guilds` (to check server membership)
  
- [ ] **OAuth Flow Implementation**:
  1. User clicks "Join Discord" button
  2. Redirect to Discord OAuth authorization URL
  3. User authorizes application
  4. Discord redirects to callback with authorization code
  5. Exchange code for access token
  6. Fetch Discord user info (user ID, username)
  7. Verify user is member of required Discord server
  8. Link Discord user ID to wallet address
  9. Store verification in database
  10. Redirect back to claim page with success status

- [ ] **Server Membership Verification**:
  - Check if Discord user is member of required server
  - Use Discord API to verify guild membership
  - Only mark as verified if user is in server
  - **Error Handling**: If user authorizes but is NOT in server:
    - Show error message: "You must join our Discord server to continue. Please join and try again."
    - Do NOT mark as verified
    - Redirect back to claim page with error state

- [ ] **Backend Integration**:
  - API endpoints for OAuth flow
  - Store Discord verification in database
  - Link Discord account to wallet address
  - Real-time status updates

---

## ✅ VALIDATION & EDGE CASES

### Validation Rules
- [ ] User cannot claim twice
- [ ] User must complete all verifications before claiming
- [ ] Referral link must be valid wallet address
- [ ] Self-referral prevention (user cannot refer themselves)
- [ ] KOL cannot use both KOL ID and wallet referral for same transaction
- [ ] Minimum $20 purchase for referral to count

### Edge Cases
- [ ] What if user is both KOL and claimer?
  - **Answer**: Use whichever referral link was used (wallet or KOL ID)
- [ ] What if referral link is invalid?
  - Validate wallet address format before processing
  - Show error if invalid format
- [ ] What if Discord OAuth fails or Discord API is down?
  - **Error Handling**: Show user-friendly error message
  - "Discord verification is temporarily unavailable. Please try again later."
  - Allow user to retry OAuth flow
  - Do not block claim if Discord was previously verified (check database)
  - Log errors for monitoring
- [ ] What if user disconnects wallet mid-flow?
  - Reset verification states
  - Show connect wallet prompt
- [ ] What if user already claimed before new system?
  - Check existing claim status
  - Show appropriate state (already claimed)

---

## 🧪 TESTING CHECKLIST

- [ ] Test wallet connection flow
- [ ] Test Discord OAuth verification flow
- [ ] Test X verification (existing)
- [ ] Test claim flow end-to-end
- [ ] Test referral link generation
- [ ] Test referral tracking on buy page
- [ ] Test leaderboard calculations
- [ ] Test weekly reset functionality
- [ ] Test export functionality (CSV only)
- [ ] Test mobile responsiveness
- [ ] Test edge cases (self-referral, etc.)

---

## ✅ ANSWERS TO CLARIFICATION QUESTIONS

### ✅ All Questions Answered:

1. **Discord Verification**: 
   - ✅ **IMPLEMENT NOW** - Use Discord OAuth 2.0
   - OAuth flow: User authorizes → Verify server membership → Link to wallet
   - Store Discord user ID and verification status in database

2. **Referral Link Format**:
   - ✅ Query parameter: `/buy?ref={walletAddress}`
   - ✅ Path pattern: `/buy/wallet/{walletAddress}` (for wallet referrals)
   - ✅ Path pattern: `/buy/kol/{kolId}` (for KOL referrals)
   - ✅ No shortened URLs needed
   - ✅ No referral landing page needed

3. **Leaderboard Reset**:
   - ✅ Reset time: Monday 00:00 UTC
   - ✅ No previous week display
   - ✅ Timezone: Use UTC for all server-side operations, display in user's local timezone

4. **Export Format**:
   - ✅ Format: CSV only
   - ✅ Filename: `{type}-referrals-week-{weekNumber}-{exportDate}.csv`
   - ✅ Automated cron job at reset time (Monday 00:00 UTC)
   - ✅ Email via Brevo: From `IR@agvprotocol.org` to `bd@agvprotocol.com`
   - ✅ Attach CSV files as email attachments

5. **KOL vs Claimer Referral Priority**:
   - ✅ Priority depends on link used:
     - `/buy/wallet/{walletAddress}` or `/buy?ref={walletAddress}` → Wallet referral
     - `/buy/kol/{kolId}` or `/buy?kolId={kolId}` → KOL referral
   - ✅ No warning needed

6. **Total Claimed Counter**:
   - ✅ Real-time from database
   - ✅ Source: Database (all claims are recorded)

7. **Purchase Prompt**:
   - ✅ Persists on page (not just show once)
   - ✅ No tracking of "Buy Now" clicks needed

8. **Referral Rewards**:
   - ✅ Not needed - no reward display in UI

---

## 🚀 IMPLEMENTATION PRIORITY

### Phase 1: Core Modules (Must Have)
1. Top Banner
2. Connect Wallet
3. Social Verification (Discord OAuth + X)
4. Claim Button
5. Purchase Prompt

### Phase 2: Referral System (Must Have)
6. Referral Module
7. Referral tracking on buy page
8. Database schema updates

### Phase 3: Leaderboards (Must Have)
9. Referral Leaderboard on claim page
10. Weekly reset system
11. Leaderboard display on all pages

### Phase 4: Export & Polish (Nice to Have)
12. Export functionality
13. Community CTA
14. Final UI polish

---

## 📌 NOTES

- Remove all "please" text from UI (per PM request)
- All purchases happen on buy page (not claim page)
- Referral links must redirect to buy page
- Track who referred and how much was spent
- KOL referrals use KOL ID, claimer referrals use wallet address
- Keep activation leaderboard (don't remove)
- Maintain 4 leaderboard types: KOL, Referral, Buyer, Activation
- Discord OAuth integration required - implement OAuth 2.0 flow
- Export functionality is automated via Vercel Cron Jobs with email delivery via Brevo API
- Platform: Deployed on Vercel

---

## ✅ FINAL CONFIGURATION SUMMARY

### Discord OAuth:
- Use environment variables (placeholders): `DISCORD_CLIENT_ID`, `DISCORD_CLIENT_SECRET`, `DISCORD_GUILD_ID`
- Redirect URI: `/api/auth/discord/callback` (relative path, works in all environments)
- Scopes: `identify`, `guilds`
- Error handling: Show error if user not in Discord server

### Brevo Email:
- Use Brevo API (not SMTP)
- Environment variable: `BREVO_API_KEY`
- From: `IR@agvprotocol.org` → To: `bd@agvprotocol.com`
- API endpoint: `https://api.brevo.com/v3/smtp/email`

### Vercel Cron Jobs:
- Platform: Vercel
- Schedule: Every Monday 00:00 UTC (`0 0 * * 1`)
- Endpoint: `/api/cron/export-referrals`
- Security: Verify `x-vercel-signature` header
- Configuration: `vercel.json` with cron schedule

### Technical Details:
- Timezone: UTC for all server operations
- Export format: CSV only
- Referral routes: `/buy/wallet/{address}` and `/buy/kol/{kolId}`

---

**Status**: ✅ Ready for Implementation - All Requirements Clarified

