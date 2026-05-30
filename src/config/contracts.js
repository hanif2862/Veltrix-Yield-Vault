import { opnChain } from './chains';

export const VAULT_CONTRACT_ADDRESS = import.meta.env.VITE_VAULT_CONTRACT_ADDRESS || 'PASTE_CONTRACT_ADDRESS_HERE';

export const VAULT_CONTRACTS = {
  [opnChain.id]: VAULT_CONTRACT_ADDRESS,
};

export const VAULT_ABI = [
  // Paste your deployed Veltrix vault ABI here when smart contract integration is added.
];
