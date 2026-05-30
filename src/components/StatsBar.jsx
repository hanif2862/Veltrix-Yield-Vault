const stats = [
  {
    icon: "https://static.codia.ai/s/image_e3390a30-fe41-454c-b457-9260e6fa7fe5.png",
    label: "Total Value Locked",
    value: "12,450 OPN",
    sub: "≈$24,890 USD",
    change: null,
  },
  {
    icon: "https://static.codia.ai/s/image_0fa8c165-777c-496e-9ba8-d86c69fdb0a4.png",
    label: "Total Users",
    value: "328",
    sub: null,
    change: "+12 this week",
  },
  {
    icon: "https://static.codia.ai/s/image_d74a28c5-d19d-4a09-a4ab-2fb0a2fed15a.png",
    label: "Total Transactions",
    value: "8,920",
    sub: null,
    change: "+245 this week",
  },
  {
    icon: "https://static.codia.ai/s/image_a0c3cc9a-762e-4e1c-9342-5354cb06cd6d.png",
    label: "Total Points Claimed",
    value: "56,320",
    sub: null,
    change: "+1,250 this week",
  },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="stat-item">
          <img src={s.icon} alt={s.label} className="stat-icon" />
          <div className="stat-info">
            <span className="stat-label">{s.label}</span>
            <span className="stat-value">{s.value}</span>
            {s.sub && <span className="stat-sub">{s.sub}</span>}
            {s.change && <span className="stat-change">{s.change}</span>}
          </div>
          {i < stats.length - 1 && <div className="stat-divider" />}
        </div>
      ))}
    </div>
  );
}
