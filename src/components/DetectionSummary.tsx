import type { ScanData } from '../App'
import './DetectionSummary.css'

interface DetectionSummaryProps {
  data: ScanData | null
}

function DetectionSummary({ data }: DetectionSummaryProps) {
  const metrics = [
    {
      label: 'Bundle Buys Detected',
      value: data?.bundleBuys ?? '—',
      icon: '📦',
      highlight: data && data.bundleBuys > 5,
    },
    {
      label: 'Largest Wallet Cluster (%)',
      value: data ? `${data.largestClusterPercent}%` : '—',
      icon: '🎯',
      highlight: data && data.largestClusterPercent > 15,
    },
    {
      label: 'Top Cluster Wallet Count',
      value: data?.topClusterWalletCount ?? '—',
      icon: '👛',
      highlight: data && data.topClusterWalletCount > 10,
    },
  ]

  return (
    <section className="detection-summary">
      <div className="panel-header">
        <span className="panel-icon">📊</span>
        <h2>Detection Summary</h2>
      </div>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className={`metric-card ${metric.highlight ? 'highlight' : ''}`}
          >
            <span className="metric-icon">{metric.icon}</span>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DetectionSummary
