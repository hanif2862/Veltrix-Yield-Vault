import { useEffect, useState } from 'react';
import { useAccount, useBalance, useReadContract, useWriteContract, useWaitForTransactionReceipt,} from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { VAULT_CONTRACT_ADDRESS, VAULT_ABI } from '../config/contracts';

function shortenAddress(address) {
  if (!address) return 'Not connected';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [amount, setAmount] = useState('0.001');

  const {
    writeContract,
    data: txHash,
    isPending: isWriting,
  } = useWriteContract();
  
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash: txHash,
  });
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const {
    data: balance,
    isLoading: balanceLoading,
    isError: balanceError,
    refetch: refetchBalance,} = useBalance({
    address,
    query: {
    enabled: isConnected && !!address,
  },
});
  const { data: depositData, refetch: refetchDeposit } = useReadContract({
  address: VAULT_CONTRACT_ADDRESS,
  abi: VAULT_ABI,
  functionName: 'userDeposits',
  args: address ? [address] : undefined,
  query: { enabled: !!address },
});

const { data: pointsData, refetch: refetchPoints } = useReadContract({
  address: VAULT_CONTRACT_ADDRESS,
  abi: VAULT_ABI,
  functionName: 'getLiveUserPoints',
  args: address ? [address] : undefined,
  query: { enabled: !!address },
});

const { data: rankData, refetch: refetchRank } = useReadContract({
  address: VAULT_CONTRACT_ADDRESS,
  abi: VAULT_ABI,
  functionName: 'getUserRank',
  args: address ? [address] : undefined,
  query: { enabled: !!address },
});

  const handleDeposit = () => {
  if (!isConnected || !amount || Number(amount) <= 0) return;

  writeContract({
    address: VAULT_CONTRACT_ADDRESS,
    abi: VAULT_ABI,
    functionName: 'deposit',
    value: parseEther(amount),
  });
};

const handleWithdraw = () => {
  if (!isConnected || !amount || Number(amount) <= 0) return;

  writeContract({
    address: VAULT_CONTRACT_ADDRESS,
    abi: VAULT_ABI,
    functionName: 'withdraw',
    args: [parseEther(amount)],
  });
};

useEffect(() => {
  if (isConfirmed) {
    refetchBalance?.();
    refetchDeposit?.();
    refetchPoints?.();
    refetchRank?.();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }
}, [ isConfirmed, refetchBalance, refetchDeposit, refetchPoints, refetchRank, ]);

  const walletBalance = isConnected
      ? balanceLoading
        ? 'Loading...'
        : balanceError
          ? 'Balance unavailable'
          : `${Number(balance?.formatted || 0).toLocaleString(undefined, {
              maximumFractionDigits: 4,
            })} ${balance?.symbol || 'IOPN'}`
      : 'Connect wallet';

  return (
    <section className="dashboard" id="dashboard">
      <div className="dashboard-header">
        <span className="section-title">Your Dashboard</span>
        <div className="wallet-badge">
          <span>{shortenAddress(address)}</span>
          <img
            src={
              copied
                ? "https://api.iconify.design/mdi:check.svg?color=%2322c55e"
                : "https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png"
            }
            alt="copy"
            className="copy-icon"
            title={copied ? "Copied!" : "Copy wallet address"}
            onClick={() => {
              if (!address) return;
        
              navigator.clipboard?.writeText(address);
        
              setCopied(true);
        
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          />
        </div>
        </div>

      <div className="dashboard-cards">
        <div className="dash-card">
          <img
            src="https://static.codia.ai/s/image_6b5852d0-eae5-4b90-a797-e8c2928fa711.png"
            alt="Wallet"
            className="dash-card-icon"
          />
          <div className="dash-card-info">
            <span className="dash-card-label">Wallet Balance</span>
            <span className="dash-card-value">{walletBalance}</span>
            <span className="dash-card-sub">Live wallet data</span>
          </div>
        </div>

        <div className="dash-card">
          <img
            src="https://static.codia.ai/s/image_0ab1b83b-bd74-44a1-852e-177ca0e8918f.png"
            alt="Deposit"
            className="dash-card-icon"
          />
          <div className="dash-card-info">
            <span className="dash-card-label">Your Deposit</span>
            <span className="dash-card-value">
              {depositData ? `${Number(formatEther(depositData)).toLocaleString(undefined, {
                maximumFractionDigits: 4,
              })} IOPN` : '0 IOPN'}</span>
            <span className="dash-card-sub">Live vault deposit</span>
          </div>
        </div>

        <div className="dash-card">
          <img
            src="https://static.codia.ai/s/image_97991093-131d-4b04-a680-66cfd390773b.png"
            alt="Yield"
            className="dash-card-icon"
          />
          <div className="dash-card-info">
            <span className="dash-card-label">Yield Points</span>
            <span className="dash-card-value">
              {pointsData ? Number(pointsData).toLocaleString() : '0'}</span>
            <span className="dash-card-sub">Live user points</span>
          </div>
        </div>

        <div className="dash-card">
          <img
            src="https://static.codia.ai/s/image_9c846142-0d0f-40eb-a88d-f6f1775f7248.png"
            alt="Rank"
            className="dash-card-icon"
          />
          <div className="dash-card-info">
            <span className="dash-card-label">User Rank</span>
            <span className="dash-card-value">
              {rankData ? `#${rankData}` : '-'} </span>
            <span className="dash-card-sub">Live ranking</span>
          </div>
        </div>
      </div>

      <div className="dashboard-actions">
        <div className="amount-row">
          <div className="amount-input-wrap">
            <span className="amount-label">Amount (OPN)</span>
            <div className="amount-input-box">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="amount-input"
                disabled={!isConnected || isWriting || isConfirming}
              />
              <button
                className="max-btn"
                type="button"
                disabled={!isConnected}
                onClick={() => setAmount(balance?.formatted || '0')}
              >
                MAX
              </button>
            </div>
            <span className="balance-note">Balance: {walletBalance}</span>
          </div>
          <button
            className="btn-deposit"
            type="button"
            onClick={!isConnected ? openConnectModal : handleDeposit}
            disabled={!isConnected || isWriting || isConfirming}
          >
            <img
              src="https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png"
              alt="deposit"
              className="action-icon"
            />
            {!isConnected
              ? 'Connect First'
              : isWriting || isConfirming
                ? 'Depositing...'
                : 'Deposit'}
          </button>
          <button
            className="btn-withdraw"
            type="button"
            onClick={handleWithdraw}
            disabled={!isConnected || isWriting || isConfirming}
          >
            <img
              src="https://static.codia.ai/s/image_1b8d1dc5-44ff-4d00-8011-b121cb8bb246.png"
              alt="withdraw"
              className="action-icon"
            />
            {isWriting || isConfirming ? 'Processing...' : 'Withdraw'}
          </button>
        </div>
      </div>
      {showToast && txHash && (
        <div className="tx-toast">
          <div>✅ Transaction Confirmed</div>
      
          <a
            href={`https://testnet.iopn.tech/tx/${txHash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Explorer 🔗
          </a>
        </div>
      )}
    </section>
  );
}
