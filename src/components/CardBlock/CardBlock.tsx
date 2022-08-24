import styles from './CardBlock.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

interface ICardBlockProps {
  card: CardBlock
  idx: number
  flipCard: (idx: number) => void
}

const CardBlock: React.FC<ICardBlockProps> = ({ card, idx, flipCard }) => {
  const { activeCards, matchingCards } = useSelector(
    (state: RootState) => state.game
  )

  return (
    <div
      className={classNames(styles.cardblock, {
        [styles.cardblock__flipped]:
          activeCards.indexOf(idx) !== -1 || matchingCards.indexOf(idx) !== -1,
      })}
      onClick={() => flipCard(idx)}>
      <div className={styles.cardblock__front}>
        <img className={styles.cardblock__img} src={card.img} alt='' />
      </div>
      <div className={styles.cardblock__back}></div>
    </div>
  )
}

export default CardBlock
