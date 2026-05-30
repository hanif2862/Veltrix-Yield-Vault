import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import App from './App';
import { wagmiConfig, defaultChain } from './config/wagmi';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root');

const queryClient = new QueryClient();

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          initialChain={defaultChain}
          modalSize="compact"
          theme={darkTheme({
            accentColor: '#7B52D9',
            accentColorForeground: '#F4F0FF',
            borderRadius: 'medium',
            overlayBlur: 'small',
          })}
        >
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
