import { defineChain } from 'viem';

const fallbackChainId = 999999;
const parsedChainId = Number(import.meta.env.VITE_OPN_CHAIN_ID || fallbackChainId);

export const opnChain = defineChain({
  id: Number.isFinite(parsedChainId) ? parsedChainId : fallbackChainId,
  name: import.meta.env.VITE_OPN_CHAIN_NAME || 'OPN Chain',
  nativeCurrency: {
    name: import.meta.env.VITE_OPN_NATIVE_NAME || 'OPN',
    symbol: import.meta.env.VITE_OPN_NATIVE_SYMBOL || 'OPN',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_OPN_RPC_URL || 'https://PASTE_OPN_RPC_URL_HERE'],
    },
    public: {
      http: [import.meta.env.VITE_OPN_RPC_URL || 'https://PASTE_OPN_RPC_URL_HERE'],
    },
  },
  blockExplorers: {
    default: {
      name: import.meta.env.VITE_OPN_EXPLORER_NAME || 'OPN Explorer',
      url: import.meta.env.VITE_OPN_EXPLORER_URL || 'https://PASTE_OPN_EXPLORER_URL_HERE',
    },
  },
});

export const supportedChains = [opnChain];
