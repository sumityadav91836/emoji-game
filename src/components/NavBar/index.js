// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore} = props

  return (
    <section className="navbar-section">
      <div className="logo-and-name">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      <div className="score-and-topscore-section">
        <p className="emoji-score-topscore">Score: {currentScore}</p>
        <p className="emoji-score-topscore">Top Score: {topScore}</p>
      </div>
    </section>
  )
}

export default NavBar
