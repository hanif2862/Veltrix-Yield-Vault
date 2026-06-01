import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

export default function Hero() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <img
            src="https://static.codia.ai/s/image_9e0076a1-9760-4ade-90e0-79aeb1fa2e33.png"
            alt="OPN"
            className="badge-icon"
          />
          <span>Built on OPN Chain</span>
        </div>
        <h1 className="hero-title">VELTRIX</h1>
        <h2 className="hero-subtitle">Yield Vault. Earn More. On-Chain.</h2>
        <p className="hero-desc">
          Deposit OPN, earn yield points, and compete on the leaderboard.<br />
          100% permissionless and transparent.
        </p>
        <div className="hero-actions">
          <button
            className="btn-launch"
            type="button"
            onClick={() => {
              if (!isConnected && openConnectModal) {
                openConnectModal();
                return;
              }
              document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <img
              src="https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png"
              alt="rocket"
              className="btn-icon"
            />
            {isConnected ? 'Open Dashboard' : 'Connect Wallet'}
          </button>
          <button className="btn-contract"
            onClick={() =>
            window.open(
              'https://testnet.iopn.tech/address/0x5F1832becb95F7af39d5Dc6D5945f2D4de44FE8c',
              '_blank'
            )
          }
          >
            <img
              src="https://static.codia.ai/s/image_cefb0a79-9146-4cd6-855d-9ec240b29a7a.png"
              alt="doc"
              className="btn-icon"
            />
            View Contract
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://static.codia.ai/s/image_3ba2f931-7272-4dd9-a2d3-a6803b2e7139.png"
          alt="OPN coin"
          className="hero-coin-left"
        />
        <img
          src="https://static.codia.ai/s/image_e627cf38-46ec-4205-b783-43ffd0708ce8.png"
          alt="Vault"
          className="hero-vault"
        />
        <img
          src="https://static.codia.ai/s/image_3a7eac47-fa7d-4d7e-b3f7-e0f2df41f55f.png"
          alt="OPN coin right"
          className="hero-coin-right"
        />
      </div>
    </section>
  );
}
