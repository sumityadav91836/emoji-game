import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    isGameProgress: true,
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({
      topScore: newTopScore,
      isGameProgress: false,
    })
  }

  clickedEmoji = uniqueId => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiClickedAgain = clickedEmojiList.includes(uniqueId)
    const clickedEmojisLength = clickedEmojiList.length

    if (isEmojiClickedAgain) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, uniqueId],
      }))
    }
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojiList()

    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickedEmoji={this.clickedEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameProgress: true})
  }

  renderScoreCard = () => {
    const {emojiList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {clickedEmojiList, topScore, isGameProgress} = this.state

    return (
      <div className="emoji-game-background">
        <NavBar
          topScore={topScore}
          isGameProgress={isGameProgress}
          currentScore={clickedEmojiList.length}
        />
        {isGameProgress ? this.renderEmojiList : this.renderScoreCard}
      </div>
    )
  }
}

export default EmojiGame
