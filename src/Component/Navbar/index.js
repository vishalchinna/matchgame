import './index.css'

const Navbar = prop => {
  const {score, count} = prop

  return (
    <li className="Navbar-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <li className="score-time">
        <p className="score">
          Score: <span className="sec">{score}</span>
        </p>
        <div className="time-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="time"
          />
          <p className="sec">{count} sec</p>
        </div>
      </li>
    </li>
  )
}

export default Navbar
