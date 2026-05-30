import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NetworkButton() {
  return (
    <ConnectButton.Custom>
      {({ chain, openChainModal, mounted }) => (
        <button className="btn-network" type="button" onClick={openChainModal} disabled={!mounted}>
          <img
            src="https://static.codia.ai/s/image_4bd0ab0a-c5be-4013-9ef2-798b2f63952c.png"
            alt="chain"
            className="chain-icon"
          />
          <span>{chain?.unsupported ? 'Wrong Network' : chain?.name || 'OPN Chain'}</span>
          <img
            src="https://static.codia.ai/s/image_c7e09cb9-64d3-434f-a15d-d5e06c60cc9c.png"
            alt="chevron"
            className="chevron-icon"
          />
        </button>
      )}
    </ConnectButton.Custom>
  );
}
