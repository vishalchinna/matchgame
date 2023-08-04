import './index.css'

const FinalResult = prop => {
  const {score, restartGame} = prop
  const cancelButton = () => {
    restartGame()
  }

  return (
    <div className="result-back">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <div className="score-details">
        <p className="score-name">YOUR SCORE</p>
        <h1 className="scores">{score}</h1>
        <div className="reset-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset"
          />
          <button type="button" onClick={cancelButton} className="btn">
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinalResult
