import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const lostImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const imgUrl = isWon ? wonImage : lostImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="score-card">
      <div className="score-section">
        <h1 className="game-status">{gameStatus}</h1>
        <h2 className="score-label">{scoreLabel}</h2>
        <h2 className="score">{score}/12</h2>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imgUrl} alt="win or lose" className="img" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
