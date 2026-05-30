export default function SmartContract() {
  return (
    <section className="smart-contract">
      <div className="sc-header">
        <span className="section-title">Smart Contract</span>
        <span className="sc-code-icon">&lt;/&gt;</span>
      </div>
      <div className="sc-divider" />
      <div className="sc-row">
        <span className="sc-key">Network</span>
        <span className="sc-val sc-chain">
          <span className="sc-dot" />
          OPN Chain
        </span>
      </div>
      <div className="sc-row">
        <span className="sc-key">Contract Address</span>
        <span className="sc-val sc-addr">
          0x3F6a...9b2E7d41
          <img
            src="https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png"
            alt="copy"
            className="copy-icon-sm"
          />
        </span>
      </div>
      <div className="sc-row">
        <span className="sc-key">Verified</span>
        <span className="sc-val">
          <span className="sc-verified">&#10003; Yes</span>
          <a href="#" className="sc-explorer">View on Explorer</a>
        </span>
      </div>
      <div className="sc-divider" />
      <span className="sc-fn-label">Main Functions</span>
      <div className="sc-fn">deposit(uint256 amount)</div>
      <div className="sc-fn">withdraw(uint256 amount)</div>
      <div className="sc-fn">claim()</div>
    </section>
  );
}
