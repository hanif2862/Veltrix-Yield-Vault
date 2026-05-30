import { ConnectButton } from '@rainbow-me/rainbowkit';

function shortenAddress(address) {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function WalletConnectButton({ className = 'btn-connect', compact = false }) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        if (!ready) {
          return (
            <button className={className} type="button" disabled>
              Loading...
            </button>
          );
        }

        if (!connected) {
          return (
            <button className={className} type="button" onClick={openConnectModal}>
              Connect Wallet
            </button>
          );
        }

        if (chain.unsupported) {
          return (
            <button className={className} type="button" onClick={openChainModal}>
              Wrong Network
            </button>
          );
        }

        return (
          <button className={className} type="button" onClick={openAccountModal}>
            {compact ? shortenAddress(account.address) : account.displayName}
            {account.displayBalance ? ` • ${account.displayBalance}` : ''}
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}
