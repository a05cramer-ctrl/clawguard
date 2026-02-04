import type { Status } from '../App'
import TypewriterText from './TypewriterText'
import './TopBar.css'

interface TopBarProps {
  status: Status
}

const taglines = [
  'Protecting your investments...',
  'Detecting coordinated activity...',
  'Scanning for bundle buys...',
  'Analyzing wallet clusters...',
  'Guarding against rug pulls...',
]

function TopBar({ status }: TopBarProps) {
  return (
    <header className="top-bar">
      <div className="logo-section">
        <div className="logo">
          <img src="/claw-angel.png" alt="Claw Angel" className="logo-icon" />
          <h1>Claw Guard</h1>
        </div>
        <div className="tagline">
          <TypewriterText texts={taglines} typingSpeed={60} pauseDuration={3000} />
        </div>
      </div>
      <div className="nav-right">
        <a 
          href="https://x.com/claw_guard" 
          target="_blank" 
          rel="noopener noreferrer"
          className="twitter-btn"
          title="Follow us on X"
        >
          <svg viewBox="0 0 24 24" className="x-icon" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="twitter-text">Follow</span>
        </a>
        <div className={`status status-${status.toLowerCase()}`}>
          <span className="status-dot" />
          <span className="status-text">{status}</span>
        </div>
      </div>
    </header>
  )
}

export default TopBar
