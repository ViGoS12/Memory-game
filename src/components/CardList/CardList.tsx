import styles from './CardList.module.scss'

import CardBlock from '../CardBlock'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  setActiveCard,
  setMatchingCards,
  setWin,
} from '../../redux/slices/gameSlice'

const CardList: React.FC = () => {
  const dispatch = useDispatch()

  const { cards, activeCards, matchingCards } = useSelector(
    (state: RootState) => state.game
  )

  const flipCard = async (idx: number) => {
    dispatch(setActiveCard(idx))

    if (activeCards.length === 2) {
      if (cards[activeCards[0]]?.id === cards[activeCards[1]]?.id) {
        dispatch(setMatchingCards(activeCards[0]))
        dispatch(setMatchingCards(activeCards[1]))
      }
    }

    if (cards.length === matchingCards.length + 2) {
      dispatch(setWin(true))
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
