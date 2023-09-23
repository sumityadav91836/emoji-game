// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickedEmoji(id)
  }

  return (
    <li>
      <button className="emoji-btn" type="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
