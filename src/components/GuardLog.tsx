import type { LogEntry } from '../App'
import './GuardLog.css'

interface GuardLogProps {
  logs: LogEntry[]
}

function GuardLog({ logs }: GuardLogProps) {
  return (
    <section className="guard-log">
      <div className="panel-header">
        <span className="panel-icon">📜</span>
        <h2>Guard Log</h2>
      </div>
      <div className="log-container">
        {logs.length === 0 ? (
          <div className="log-empty">No activity recorded yet</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="log-entry">
              <span className="log-timestamp">[{log.timestamp}]</span>
              <span className="log-message">{log.message}</span>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default GuardLog
