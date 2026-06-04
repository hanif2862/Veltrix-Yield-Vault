import { useState } from 'react';
import WalletConnectButton from './WalletConnectButton';
import NetworkButton from './NetworkButton';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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

      <button
        className="mobile-menu-btn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        <a href="#home" className="nav-item nav-item-active" onClick={closeMenu}>
          <span>Home</span>
          <img
            src="https://static.codia.ai/s/image_c6a5f659-6563-4352-bd2e-84096a8422a0.png"
            alt=""
            className="nav-underline"
          />
        </a>

        <a href="#dashboard" className="nav-item" onClick={closeMenu}>App</a>
        <a href="#leaderboard" className="nav-item" onClick={closeMenu}>Leaderboard</a>
        <a href="#contract" className="nav-item" onClick={closeMenu}>Smart Contract</a>
        <a href="#roadmap" className="nav-item" onClick={closeMenu}>Roadmap</a>

        <a
          href="https://github.com/hanif2862/Veltrix-Yield-Vault#readme"
          target="_blank"
          rel="noreferrer"
          className="nav-item"
          onClick={closeMenu}
        >
          Docs
        </a>
      </div>

      <div className="navbar-right">
        <NetworkButton />
        <WalletConnectButton className="btn-connect" compact />
      </div>
    </nav>
  );
}

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
        <a href="#home" className="nav-item nav-item-active">
          <span>Home</span>
          <img
            src="https://static.codia.ai/s/image_c6a5f659-6563-4352-bd2e-84096a8422a0.png"
            alt=""
          className="nav-underline"
          />
        </a>

        <a href="#dashboard" className="nav-item">App</a>

        <a href="#leaderboard" className="nav-item">
          Leaderboard
        </a>

        <a href="#contract" className="nav-item">
          Smart Contract
        </a>

        <a href="#roadmap" className="nav-item">
          Roadmap
        </a>

        <a href="https://github.com/hanif2862/Veltrix-Yield-Vault#readme"
            target="_blank"
            rel="noreferrer"
            className="nav-item"
        >
          Docs
        </a>
      </div>
      <div className="navbar-right">
        <NetworkButton />
        <WalletConnectButton className="btn-connect" compact />
      </div>
    </nav>
  );
}
