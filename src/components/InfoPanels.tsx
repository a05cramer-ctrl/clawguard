import { useState } from 'react'
import './InfoPanels.css'

function InfoPanels() {
  const [activeTab, setActiveTab] = useState<'howto' | 'howitworks'>('howto')

  return (
    <section className="info-panels">
      <div className="info-tabs">
        <button 
          className={`info-tab ${activeTab === 'howto' ? 'active' : ''}`}
          onClick={() => setActiveTab('howto')}
        >
          <span className="tab-icon">📖</span>
          How to Use
        </button>
        <button 
          className={`info-tab ${activeTab === 'howitworks' ? 'active' : ''}`}
          onClick={() => setActiveTab('howitworks')}
        >
          <span className="tab-icon">⚙️</span>
          How it Works
        </button>
      </div>

      <div className="info-content">
        {activeTab === 'howto' ? (
          <div className="info-section">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Enter Token Address</h4>
                <p>Paste the pump.fun token contract address or the full pump.fun URL into the scan input field above.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Initiate Scan</h4>
                <p>Click the "Scan Token" button to begin the analysis. The system will immediately start processing blockchain data.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Review Results</h4>
                <p>Check the Detection Summary for bundle buys and wallet clusters. High numbers may indicate coordinated activity.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Monitor Activity</h4>
                <p>Once scanning completes, Claw Guard enters Guarding mode. Watch the Guard Log for real-time alerts.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="info-section">
            <div className="tech-block">
              <div className="tech-icon">🔍</div>
              <div className="tech-content">
                <h4>Bundle Detection</h4>
                <p>Analyzes transaction patterns to identify wallets that execute buys within the same block or narrow time windows—a common indicator of coordinated bot activity.</p>
              </div>
            </div>
            <div className="tech-block">
              <div className="tech-icon">🕸️</div>
              <div className="tech-content">
                <h4>Cluster Analysis</h4>
                <p>Maps wallet relationships by tracking fund flows, shared transaction sources, and behavioral patterns to identify groups controlled by single entities.</p>
              </div>
            </div>
            <div className="tech-block">
              <div className="tech-icon">📊</div>
              <div className="tech-content">
                <h4>Supply Distribution</h4>
                <p>Calculates token concentration across detected clusters to assess dump risk. Higher percentages mean greater potential for price manipulation.</p>
              </div>
            </div>
            <div className="tech-block">
              <div className="tech-icon">🛡️</div>
              <div className="tech-content">
                <h4>Real-time Monitoring</h4>
                <p>Continuously watches for new suspicious transactions and alerts you immediately when coordinated activity is detected on your scanned token.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default InfoPanels
