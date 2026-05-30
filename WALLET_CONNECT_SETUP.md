# Veltrix Wallet Connect Setup

This version adds Wallet Connect support with Wagmi, RainbowKit, Viem, ethers.js, and React Query.

## 1. Install dependencies

```bash
npm install
```

## 2. Create `.env`

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then replace these values:

```env
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
VITE_OPN_CHAIN_ID=your_opn_chain_id
VITE_OPN_RPC_URL=your_opn_rpc_url
VITE_OPN_EXPLORER_URL=your_opn_explorer_url
VITE_OPN_NATIVE_SYMBOL=OPN
VITE_VAULT_CONTRACT_ADDRESS=your_contract_address
```

## 3. Run local development

```bash
npm run dev
```

## Current status

Included:
- RainbowKit wallet modal
- MetaMask
- Rabby Wallet
- WalletConnect
- Coinbase Wallet
- OPN Chain custom config placeholder
- Connected wallet address in navbar
- Wallet balance in dashboard
- Hero CTA changes to Connect Wallet / Open Dashboard

Not included yet:
- Deposit transaction
- Withdraw transaction
- Real contract stats
- Real leaderboard

Those require the deployed contract address and ABI.
