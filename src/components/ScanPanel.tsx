import { useState } from 'react'
import './ScanPanel.css'

interface ScanPanelProps {
  onScan: (tokenAddress: string) => void
  isScanning: boolean
}

function ScanPanel({ onScan, isScanning }: ScanPanelProps) {
  const [tokenInput, setTokenInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (tokenInput.trim() && !isScanning) {
      onScan(tokenInput.trim())
    }
  }

  return (
    <section className="scan-panel">
      <div className="panel-header">
        <span className="panel-icon">🔍</span>
        <h2>Scan Panel</h2>
      </div>
      <form onSubmit={handleSubmit} className="scan-form">
        <label className="input-label">Pump.fun Token</label>
        <div className="input-group">
          <input
            type="text"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Enter token address or pump.fun link..."
            className="token-input"
            disabled={isScanning}
          />
          <button 
            type="submit" 
            className={`scan-button ${isScanning ? 'scanning' : ''}`}
            disabled={!tokenInput.trim() || isScanning}
          >
            {isScanning ? (
              <>
                <span className="spinner" />
                Scanning...
              </>
            ) : (
              'Scan Token'
            )}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ScanPanel
