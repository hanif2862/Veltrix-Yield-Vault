import WalletConnectButton from './WalletConnectButton';
import NetworkButton from './NetworkButton';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://static.codia.ai/s/image_ffafdc3c-535c-4c4d-bb02-1011fa154af2.png"
          alt="Veltrix Logo"
          className="navbar-logo"
        />
        <div className="navbar-brand">
          <span className="brand-v">V</span>
          <span className="brand-e">E</span>
          <span className="brand-l">L</span>
          <span className="brand-t">T</span>
          <span className="brand-rix">RIX</span>
        </div>
        <span className="navbar-tagline">Yield Vault on OPN Chain</span>
      </div>
      <div className="navbar-links">
        <div className="nav-item nav-item-active">
          <span>Home</span>
          <img
            src="https://static.codia.ai/s/image_c6a5f659-6563-4352-bd2e-84096a8422a0.png"
            alt=""
            className="nav-underline"
          />
        </div>
        <div className="nav-item">App</div>
        <div className="nav-item">Leaderboard</div>
        <div className="nav-item">Contract</div>
        <div className="nav-item">Roadmap</div>
        <div className="nav-item">Docs</div>
      </div>
      <div className="navbar-right">
        <NetworkButton />
        <WalletConnectButton className="btn-connect" compact />
      </div>
    </nav>
  );
}
