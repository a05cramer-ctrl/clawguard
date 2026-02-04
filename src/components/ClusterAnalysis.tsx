import type { ScanData } from '../App'
import './ClusterAnalysis.css'

interface ClusterAnalysisProps {
  data: ScanData | null
}

function ClusterAnalysis({ data }: ClusterAnalysisProps) {
  const getDensityClass = (density: string | undefined) => {
    switch (density) {
      case 'Low': return 'density-low'
      case 'Moderate': return 'density-moderate'
      case 'High': return 'density-high'
      default: return ''
    }
  }

  return (
    <section className="cluster-analysis">
      <div className="panel-header">
        <span className="panel-icon">🔗</span>
        <h2>Cluster Analysis</h2>
      </div>
      <div className="analysis-content">
        <div className="analysis-row">
          <span className="analysis-label">Clustered Wallets</span>
          <span className="analysis-value">
            {data?.clusteredWallets ?? '—'}
          </span>
        </div>
        <div className="divider" />
        <div className="analysis-row">
          <span className="analysis-label">Supply Held by Top Cluster</span>
          <span className="analysis-value">
            {data ? `${data.supplyPercent}%` : '—'}
          </span>
        </div>
        <div className="divider" />
        <div className="analysis-row">
          <span className="analysis-label">Cluster Density</span>
          <span className={`analysis-value density-badge ${getDensityClass(data?.clusterDensity)}`}>
            {data?.clusterDensity ?? '—'}
          </span>
        </div>
      </div>
    </section>
  )
}

export default ClusterAnalysis
