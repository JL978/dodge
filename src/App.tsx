import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const isReverse = useMemo(() => {
    if (count < 8) return count % 2 !== 0
    return false
  }, [count])

  return (
    <div className="App">
<div
  style = {{
    border: "1px solid #ccc",
    padding: "1em",
    borderRadius: "0.5rem",
  }}
>
      <h1>WARNING!</h1>
      <p>ALERT! VIRUS DETECTED</p>
      <div className={`card ${isReverse ? "reverse" : ""}`}>
        <button className="primary">
          Click here to remove
        </button>
        <button 
          className="outline"
          onMouseEnter={() => setCount(count + 1)}
          >
          Close
        </button>
      </div>
</div>
    </div>
  )
}

export default App
