import { useState, useEffect } from 'react'
import './CommandPopup.css'

const commands = [
  '> Initializing threat detection module...',
  '> Scanning blockchain for anomalies...',
  '> Analyzing wallet clustering patterns...',
  '> Cross-referencing transaction hashes...',
  '> Monitoring pump.fun activity...',
  '> Detecting bundle buy signatures...',
  '> Evaluating token distribution...',
  '> Checking for coordinated wallets...',
  '> Running anti-rug protocols...',
  '> Claw Guard active and monitoring...',
]

function CommandPopup() {
  const [visibleCommands, setVisibleCommands] = useState<{ id: number; text: string; fading: boolean }[]>([])
  const [commandId, setCommandId] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCommand = commands[Math.floor(Math.random() * commands.length)]
      const newId = commandId
      
      setVisibleCommands(prev => [...prev, { id: newId, text: randomCommand, fading: false }])
      setCommandId(prev => prev + 1)

      // Start fading after 2 seconds
      setTimeout(() => {
        setVisibleCommands(prev => 
          prev.map(cmd => cmd.id === newId ? { ...cmd, fading: true } : cmd)
        )
      }, 2500)

      // Remove after fade
      setTimeout(() => {
        setVisibleCommands(prev => prev.filter(cmd => cmd.id !== newId))
      }, 3500)
    }, 4000)

    // Initial command
    const initialCommand = commands[0]
    setVisibleCommands([{ id: -1, text: initialCommand, fading: false }])
    setTimeout(() => {
      setVisibleCommands(prev => prev.map(cmd => cmd.id === -1 ? { ...cmd, fading: true } : cmd))
    }, 2500)
    setTimeout(() => {
      setVisibleCommands(prev => prev.filter(cmd => cmd.id !== -1))
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="command-popup-container">
      {visibleCommands.map((cmd) => (
        <div 
          key={cmd.id} 
          className={`command-popup ${cmd.fading ? 'fading' : ''}`}
        >
          {cmd.text}
        </div>
      ))}
    </div>
  )
}

export default CommandPopup
