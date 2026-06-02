import { useReadContract } from 'wagmi';
import { formatEther } from 'viem';
import { VAULT_CONTRACT_ADDRESS, VAULT_ABI } from '../config/contracts';

export default function StatsBar() {
  const { data: tvlData } = useReadContract({
    address: VAULT_CONTRACT_ADDRESS,
    abi: VAULT_ABI,
    functionName: 'totalValueLocked',
  });

  const { data: usersData } = useReadContract({
    address: VAULT_CONTRACT_ADDRESS,
    abi: VAULT_ABI,
    functionName: 'totalUsers',
  });

  const { data: txData } = useReadContract({
    address: VAULT_CONTRACT_ADDRESS,
    abi: VAULT_ABI,
    functionName: 'totalTransactions',
  });

  const { data: pointsData } = useReadContract({
    address: VAULT_CONTRACT_ADDRESS,
    abi: VAULT_ABI,
    functionName: 'totalPoints',
  });

  const stats = [
    {
      icon: "https://static.codia.ai/s/image_e3390a30-fe41-454c-b457-9260e6fa7fe5.png",
      label: "Total Value Locked",
      value: tvlData
        ? `${Number(formatEther(tvlData)).toLocaleString(undefined, {
            maximumFractionDigits: 4,
          })} IOPN`
        : "0 IOPN",
    },
    {
      icon: "https://static.codia.ai/s/image_0fa8c165-777c-496e-9ba8-d86c69fdb0a4.png",
      label: "Total Users",
      value: usersData ? Number(usersData).toLocaleString() : "0",
    },
    {
      icon: "https://static.codia.ai/s/image_d74a28c5-d19d-4a09-a4ab-2fb0a2fed15a.png",
      label: "Total Transactions",
      value: txData ? Number(txData).toLocaleString() : "0",
    },
    {
      icon: "https://static.codia.ai/s/image_a0c3cc9a-762e-4e1c-9342-5354cb06cd6d.png",
      label: "Total Points Earned",
      value: pointsData ? Number(pointsData).toLocaleString() : "0",
    },
  ];

  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="stat-item">
          <img src={s.icon} alt={s.label} className="stat-icon" />
          <div className="stat-info">
            <span className="stat-label">{s.label}</span>
            <span className="stat-value">{s.value}</span>
          </div>
          {i < stats.length - 1 && <div className="stat-divider" />}
        </div>
      ))}
    </div>
  );
}
