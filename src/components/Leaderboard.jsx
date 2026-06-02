import { useState } from 'react';
import { useReadContracts } from 'wagmi';
import { formatEther } from 'viem';
import { VAULT_CONTRACT_ADDRESS, VAULT_ABI } from '../config/contracts';

function shortenAddress(address) {
  if (!address) return '-';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function Leaderboard() {
  const [showAll, setShowAll] = useState(false);

  const { data: usersCountData } = useReadContracts({
    contracts: [
      {
        address: VAULT_CONTRACT_ADDRESS,
        abi: VAULT_ABI,
        functionName: 'getUsersCount',
      },
    ],
  });

  const usersCount = Number(usersCountData?.[0]?.result || 0);
  const fetchLimit = Math.min(usersCount, showAll ? 20 : 5);

  const leaderboardCalls = Array.from({ length: fetchLimit }, (_, index) => ({
    address: VAULT_CONTRACT_ADDRESS,
    abi: VAULT_ABI,
    functionName: 'leaderboard',
    args: [BigInt(index)],
  }));

  const { data: leaderboardData } = useReadContracts({
    contracts: leaderboardCalls,
    query: {
      enabled: fetchLimit > 0,
    },
  });

  const rows =
    leaderboardData
      ?.map((item) => {
        if (!item?.result) return null;

        const [user, depositAmount, points] = item.result;

        return {
          address: user,
          depositAmount,
          points,
        };
      })
      .filter(Boolean)
      .sort((a, b) => Number(b.points - a.points))
      .map((row, index) => ({
        rank: index + 1,
        address: row.address,
        deposit: `${Number(formatEther(row.depositAmount)).toLocaleString(undefined, {
          maximumFractionDigits: 4,
        })} IOPN`,
        points: Number(row.points).toLocaleString(),
        lastActivity: 'On-chain',
      })) || [];

  return (
    <section id="leaderboard" className="leaderboard">
      <div className="leaderboard-header">
        <div className="leaderboard-title-row">
          <img
            src="https://static.codia.ai/s/image_c4eea8aa-c963-4f9c-af7a-04e33abcbe05.png"
            alt="trophy"
            className="trophy-icon"
          />
          <span className="section-title">Leaderboard</span>
        </div>

        <button
          className="view-all-btn"
          type="button"
          onClick={() => setShowAll(!showAll)}
          disabled={usersCount <= 5}
        >
          {showAll ? 'Show Less' : 'View Top 20'}
        </button>
      </div>

      <div className="lb-table">
        <div className="lb-thead">
          <span>Rank</span>
          <span>Address</span>
          <span>Total Deposit</span>
          <span>Points</span>
          <span>Last Activity</span>
        </div>

        {rows.length > 0 ? (
          rows.map((row) => (
            <div key={row.address} className="lb-row">
              <span>#{row.rank}</span>
              <span>{shortenAddress(row.address)}</span>
              <span>{row.deposit}</span>
              <span>{row.points}</span>
              <span>{row.lastActivity}</span>
            </div>
          ))
        ) : (
          <div className="lb-row">
            <span>-</span>
            <span>No users yet</span>
            <span>0 IOPN</span>
            <span>0</span>
            <span>-</span>
          </div>
        )}
      </div>
    </section>
  );
}
