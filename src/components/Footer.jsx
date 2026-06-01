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
      <a href="https://github.com/hanif2862/Veltrix-Yield-Vault" 
            target="_blank"
            rel="noreferrer"
        >
        <img
            src="https://api.iconify.design/simple-icons:github.svg?color=white"
            alt="github"
            className="footer-icon"
        />
      </a>
        <img src="https://api.iconify.design/prime:twitter.svg?color=white" alt="twitter" className="footer-icon" />
        <img src="https://api.iconify.design/simple-icons:discord.svg?color=white" alt="discord" className="footer-icon" />
      <a href="https://t.me/fatthurrrr"
          target="_blank"
          rel="noreferrer"
        >
        <img
            src="https://api.iconify.design/ic:sharp-telegram.svg?color=white"
            alt="telegram"
            className="footer-icon"
         />
      </a>
        <div className="footer-divider-v" />
        <img src="https://static.codia.ai/s/image_dfd15fda-cf29-4b33-8e72-0188469d94ac.png" alt="docs" className="footer-icon-sm" />
        <span className="footer-docs">Docs</span>
        <span className="footer-copy">&copy; 2026 Veltrix. All rights reserved.</span>
      </div>
    </footer>
  );
}
