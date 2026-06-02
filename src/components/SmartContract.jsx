import { useState } from 'react';
export default function SmartContract() {
  const [copied, setCopied] = useState(false);
  return (
    <section id="contract" className="smart-contract">
      <div className="sc-header">
        <span className="section-title">Smart Contract</span>
        <span className="sc-code-icon">&lt;/&gt;</span>
      </div>
      <div className="sc-divider" />
      <div className="sc-row">
        <span className="sc-key">Network</span>
        <span className="sc-val sc-chain">
          <span className="sc-dot" />
          IOPN Testnet
        </span>
      </div>
      <div className="sc-row">
        <span className="sc-key">Contract Address</span>

        <span className="sc-val sc-addr"
          title="0xda165D783c1E9548D6Ba896192D7AA6b63D0437C"
        >
          0xda16...437C

        <img
          src="https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png"
          alt="copy"
          className="copy-icon-sm"
          onClick={() => {
            navigator.clipboard.writeText(
              '0x5F1832becb95F7af39d5Dc6D5945f2D4de44FE8c'
            );
              setCopied(true);
            
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
        />
      </span>
      {copied && (
      <div className="copy-success">
        ✓ copied
      </div>
      )}
      </div>
      <div className="sc-row">
        <span className="sc-key">Verified</span>
        <span className="sc-val">
          <span className="sc-verified">&#10003; Yes</span>
          <a href="https://testnet.iopn.tech/address/0x5F1832becb95F7af39d5Dc6D5945f2D4de44FE8c"
              target="_blank"
              rel="noreferrer"
              className="sc-explorer"
          >
              View on Explorer
          </a>
        </span>
      </div>
      <div className="sc-divider" />
      <span className="sc-fn-label">Main Functions</span>
      <div className="sc-fn">✓ Deposit Assets</div>
      <div className="sc-fn">✓ Withdraw Assets</div>
      <div className="sc-fn">✓ User Ranking</div>
    </section>
  );
}
