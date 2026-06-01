import { createConfig, http } from 'wagmi';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rabbyWallet,
  walletConnectWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { opnChain, supportedChains } from './chains';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '79a72197dfbf56c02ec5cf081de1e039';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended Wallets',
      wallets: [metaMaskWallet, rabbyWallet, walletConnectWallet, coinbaseWallet],
    },
  ],
  {
    appName: 'Veltrix Yield Vault',
    projectId,
  },
);

export const wagmiConfig = createConfig({
  chains: supportedChains,
  connectors,
  transports: {
    [opnChain.id]: http(import.meta.env.VITE_OPN_RPC_URL || 'https://testnet-rpc.iopn.tech'),
  },
});

export const defaultChain = opnChain;
