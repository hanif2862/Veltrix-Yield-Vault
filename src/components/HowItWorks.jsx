const steps = [
  {
    num: "1",
    icon: "https://static.codia.ai/s/image_27063b36-adbf-46cb-ab76-9a0e846328d3.png",
    title: "Connect Wallet",
    desc: "Connect your wallet to get started",
    numColor: "#B990D1",
  },
  {
    num: "2",
    icon: "https://static.codia.ai/s/image_814be48b-4026-448d-8e02-3793e7d1a9a8.png",
    title: "Deposit OPN",
    desc: "Deposit OPN into the vault",
    numColor: "#4DACC5",
  },
  {
    num: "3",
    icon: "https://static.codia.ai/s/image_9f3737f4-763d-40a5-a27c-f800af696396.png",
    title: "Earn Points",
    desc: "Earn yield points over time",
    numColor: "#B69D38",
  },
  {
    num: "4",
    icon: "https://static.codia.ai/s/image_874802f8-0895-4814-accd-cbe59a20ff60.png",
    title: "Withdraw or Claim",
    desc: "Withdraw anytime or claim your points",
    numColor: "#5EC174",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h3 className="hiw-title">How It Works</h3>
      <div className="hiw-steps">
        {steps.map((s, i) => (
          <div key={i} className="hiw-step-group">
            <div className="hiw-step">
              <div className="hiw-step-num" style={{ color: s.numColor }}>{s.num}</div>
              <img src={s.icon} alt={s.title} className="hiw-icon" />
              <span className="hiw-step-title">{s.title}</span>
              <span className="hiw-step-desc">{s.desc}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="hiw-arrow">
                <img
                  src="https://static.codia.ai/s/image_3310fa50-1f90-48e6-b0ee-d79b83304e1a.png"
                  alt="arrow"
                  className="arrow-img"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
