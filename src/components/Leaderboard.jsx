const rows = [
  {
    rank: 1,
    rankIcon: "https://static.codia.ai/s/image_1f5a983b-246d-4c71-80c0-21ddfa4e639a.png",
    address: "0x12...ab45",
    deposit: "500 OPN",
    points: "5,240",
    activity: "2 mins ago",
  },
  {
    rank: 2,
    rankIcon: "https://static.codia.ai/s/image_6eadcb6d-d895-4bbb-8bc3-b73d9d4f9e7d.png",
    address: "0x89...cd21",
    deposit: "420 OPN",
    points: "4,800",
    activity: "5 mins ago",
  },
  {
    rank: 3,
    rankIcon: "https://static.codia.ai/s/image_6cc4aead-787d-4622-acbc-683ead6b1259.png",
    address: "0x77...ef90",
    deposit: "300 OPN",
    points: "3,600",
    activity: "10 mins ago",
  },
];

export default function Leaderboard() {
  return (
    <section className="leaderboard">
      <div className="leaderboard-header">
        <div className="leaderboard-title-row">
          <img
            src="https://static.codia.ai/s/image_c4eea8aa-c963-4f9c-af7a-04e33abcbe05.png"
            alt="trophy"
            className="trophy-icon"
          />
          <span className="section-title">Leaderboard</span>
        </div>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="lb-table">
        <div className="lb-thead">
          <span>Rank</span>
          <span>Address</span>
          <span>Total Deposit</span>
          <span>Points</span>
          <span>Last Activity</span>
        </div>
        {rows.map((r) => (
          <div key={r.rank} className="lb-row">
            <span className="lb-rank">
              <img src={r.rankIcon} alt={`rank ${r.rank}`} className="rank-icon" />
            </span>
            <span className="lb-addr">{r.address}</span>
            <span className="lb-deposit">{r.deposit}</span>
            <span className="lb-points">{r.points}</span>
            <span className="lb-activity">{r.activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
