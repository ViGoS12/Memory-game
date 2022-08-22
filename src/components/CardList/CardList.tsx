import styles from './CardList.module.scss'

import CardBlock from '../CardBlock'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setCards } from '../../redux/slices/gameSlice'

const CardList: React.FC = () => {
  const dispatch = useDispatch()

  const { cards } = useSelector((state: RootState) => state.game)

  console.log(cards)

  // const checkCard = (current: CardBlock['id']) => {
  //   if (current !== prevCard) {
  //     if (cards[current].id === cards[prevCard].id) {
  //       cards[current].stat = 'correct'
  //       cards[prevCard].stat = 'correct'
  //       setPrevCard(-1)
  //     } else {
  //       cards[current].stat = 'wrong'
  //       cards[prevCard].stat = 'wrong'
  //       dispatch(setCards([...cards]))
  //       setTimeout(() => {
  //         cards[current].stat = ''
  //         cards[prevCard].stat = ''
  //         dispatch(setCards([...cards]))
  //         setPrevCard(-1)
  //       }, 1000)
  //     }
  //   }
  // }

  const handleClick = (id: CardBlock['id']) => {
    dispatch(
      setCards(
        cards.map((card, idx) => {
          return idx === id ? { ...card, status: 'open' } : card
        })
      )
    )
  }

  return (
    <div className={styles.cardlist}>
      {cards.map((card, idx) => (
        <CardBlock key={idx} card={card} handleClick={handleClick} id={idx} />
      ))}
    </div>
  )
}

export default CardList
