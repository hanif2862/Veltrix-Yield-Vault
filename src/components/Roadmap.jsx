export default function Roadmap() {
  const phases = [
    {
      status: 'Completed',
      title: 'Phase 1',
      items: [
        'Wallet Connect integration',
        'OPN Testnet configuration',
        'VeltrixVault smart contract deployment',
        'Dashboard contract connection',
      ],
    },
    {
      status: 'Completed',
      title: 'Phase 2',
      items: [
        'Deposit and withdraw transactions',
        'Time-based points system',
        'Realtime dashboard statistics',
        'Leaderboard and explorer links',
      ],
    },
    {
      status: 'Next',
      title: 'Phase 3',
      items: [
        'Achievement badges',
        'Seasonal leaderboard campaigns',
        'User activity history',
        'Improved reputation scoring',
      ],
    },
    {
      status: 'Future',
      title: 'Phase 4',
      items: [
        'Multi-vault support',
        'Staking integrations',
        'Community challenges',
        'Expanded ecosystem partnerships',
      ],
    },
  ];

  return (
    <section id="roadmap" className="roadmap">
      <div className="roadmap-header">
        <span className="section-title">Roadmap</span>
        <p className="roadmap-subtitle">
          Veltrix is evolving from a simple vault into an on-chain reputation layer.
        </p>
      </div>

      <div className="roadmap-grid">
        {phases.map((phase) => (
          <div key={phase.title} className="roadmap-card">
            <span className="roadmap-status">{phase.status}</span>
            <h3>{phase.title}</h3>

            <ul>
              {phase.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
