import styles from './CardList.module.scss'

import CardBlock from '../CardBlock'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setActiveCard, setMatchingCards } from '../../redux/slices/gameSlice'

const CardList: React.FC = () => {
  const dispatch = useDispatch()

  const { cards, activeCards } = useSelector((state: RootState) => state.game)

  const flipCard = (idx: number) => {
    if (activeCards[0] !== idx) {
      dispatch(setActiveCard(idx))
    }

    if (cards[activeCards[0]].id === cards[idx].id) {
      dispatch(setMatchingCards(activeCards[0]))
      dispatch(setMatchingCards(idx))
    }
  }

  return (
    <div className={styles.cardlist}>
      {cards.map((card, idx) => (
        <CardBlock key={idx} card={card} idx={idx} flipCard={flipCard} />
      ))}
    </div>
  )
}

export default CardList
