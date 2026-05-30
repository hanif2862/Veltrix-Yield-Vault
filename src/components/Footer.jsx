export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          src="https://static.codia.ai/s/image_ffafdc3c-535c-4c4d-bb02-1011fa154af2.png"
          alt="Veltrix"
          className="footer-logo"
        />
        <span className="footer-brand">VELTRIX</span>
        <span className="footer-tagline">Built on OPN Chain. Permissionless. Transparent. Decentralized.</span>
      </div>
      <div className="footer-right">
        <img src="https://static.codia.ai/s/image_758cf4e0-879b-451c-8c41-dcce61d89e90.png" alt="github" className="footer-icon" />
        <img src="https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png" alt="twitter" className="footer-icon" />
        <img src="https://static.codia.ai/s/image_041b40e2-d741-432e-8a35-0f6c1db2862c.png" alt="discord" className="footer-icon" />
        <img src="https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png" alt="telegram" className="footer-icon" />
        <div className="footer-divider-v" />
        <img src="https://static.codia.ai/s/image_dfd15fda-cf29-4b33-8e72-0188469d94ac.png" alt="docs" className="footer-icon-sm" />
        <span className="footer-docs">Docs</span>
        <span className="footer-copy">&copy; 2026 Veltrix. All rights reserved.</span>
      </div>
    </footer>
  );
}
