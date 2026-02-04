import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import ScanPanel from './components/ScanPanel'
import InfoPanels from './components/InfoPanels'
import DetectionSummary from './components/DetectionSummary'
import ClusterAnalysis from './components/ClusterAnalysis'
import GuardLog from './components/GuardLog'
import CommandPopup from './components/CommandPopup'

export type Status = 'Idle' | 'Scanning' | 'Guarding'

export interface LogEntry {
  timestamp: string
  message: string
}

export interface ScanData {
  bundleBuys: number
  largestClusterPercent: number
  topClusterWalletCount: number
  clusteredWallets: number
  supplyPercent: number
  clusterDensity: 'Low' | 'Moderate' | 'High'
}

function App() {
  const [status, setStatus] = useState<Status>('Idle')
  const [scanData, setScanData] = useState<ScanData | null>(null)
  const [logs, setLogs] = useState<LogEntry[]>([
    { timestamp: '12:41', message: 'Bundle buy detected across 5 wallets' },
    { timestamp: '12:39', message: 'Wallet cluster exceeds 18% of supply' },
    { timestamp: '12:35', message: 'No coordinated activity observed' },
  ])

  const addLog = (message: string) => {
    const now = new Date()
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
    setLogs(prev => [{ timestamp, message }, ...prev])
  }

  const handleScan = async (tokenAddress: string) => {
    setStatus('Scanning')
    addLog(`Initiating scan for token: ${tokenAddress.slice(0, 8)}...`)

    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulated scan results
    const mockData: ScanData = {
      bundleBuys: Math.floor(Math.random() * 12) + 1,
      largestClusterPercent: Math.floor(Math.random() * 25) + 5,
      topClusterWalletCount: Math.floor(Math.random() * 15) + 3,
      clusteredWallets: Math.floor(Math.random() * 20) + 5,
      supplyPercent: Math.floor(Math.random() * 30) + 10,
      clusterDensity: ['Low', 'Moderate', 'High'][Math.floor(Math.random() * 3)] as 'Low' | 'Moderate' | 'High',
    }

    setScanData(mockData)
    setStatus('Guarding')
    
    if (mockData.bundleBuys > 3) {
      addLog(`Bundle buy detected across ${mockData.bundleBuys} wallets`)
    }
    if (mockData.largestClusterPercent > 15) {
      addLog(`Wallet cluster exceeds ${mockData.largestClusterPercent}% of supply`)
    }
    addLog('Scan complete. Now monitoring token activity.')
  }

  return (
    <div className="app">
      {/* Background Effects */}
      <div className="background-effects">
        <div className="grid-overlay" />
        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="scanlines" />
        <div className="scan-beam" />
      </div>
      
      {/* Corner Decorations */}
      <div className="corner-decoration corner-tl" />
      <div className="corner-decoration corner-tr" />
      <div className="corner-decoration corner-bl" />
      <div className="corner-decoration corner-br" />
      
      {/* Command Popups */}
      <CommandPopup />
      
      <TopBar status={status} />
      <main className="main-content">
        <ScanPanel onScan={handleScan} isScanning={status === 'Scanning'} />
        <InfoPanels />
        <DetectionSummary data={scanData} />
        <ClusterAnalysis data={scanData} />
        <GuardLog logs={logs} />
      </main>
    </div>
  )
}

export default App
