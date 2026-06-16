import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const [yesPos, setYesPos] = useState({ top: '50%', left: '40%' })
  const [noPos, setNoPos] = useState({ top: '50%', left: '60%' })
  const [celebrated, setCelebrated] = useState(false)

  const moveButtons = () => {
    const newYesTop = Math.random() * 80 + 10 + '%'
    const newYesLeft = Math.random() * 80 + 10 + '%'
    const newNoTop = Math.random() * 80 + 10 + '%'
    const newNoLeft = Math.random() * 80 + 10 + '%'

    setYesPos({ top: newYesTop, left: newYesLeft })
    setNoPos({ top: newNoTop, left: newNoLeft })
  }

  const handleYes = () => {
    setCelebrated(true)
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="container">
      <h1>Happy Birthday to My Dear! Should we go out together?</h1>

      {!celebrated && (
        <div className="button-container">
          <button
            className="btn yes-btn"
            style={{ position: 'absolute', top: yesPos.top, left: yesPos.left, transform: 'translate(-50%, -50%)' }}
            onClick={handleYes}
          >
            Yes, let's celebrate together!
          </button>
          <button
            className="btn no-btn"
            style={{ position: 'absolute', top: noPos.top, left: noPos.left, transform: 'translate(-50%, -50%)' }}
            onMouseEnter={moveButtons}
          >
            No, I want to stay at home~
          </button>
        </div>
      )}

      {celebrated && (
        <div className="celebration-msg">
          <h2>Yay! I'm so happy! 🎂✨</h2>
        </div>
      )}
    </div>
  )
}

export default App
