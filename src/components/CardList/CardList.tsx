import styles from './CardList.module.scss'
import { useState } from 'react'
import CardBlock from '../CardBlock'

const DEFAULT_CARDS = [
  { id: 1, img: '/svg/angular.svg', stat: '' },
  { id: 1, img: '/svg/angular.svg', stat: '' },
  { id: 2, img: '/svg/aurelia.svg', stat: '' },
  { id: 2, img: '/svg/aurelia.svg', stat: '' },
  { id: 3, img: '/svg/backbone.svg', stat: '' },
  { id: 3, img: '/svg/backbone.svg', stat: '' },
  { id: 4, img: '/svg/ember.svg', stat: '' },
  { id: 4, img: '/svg/ember.svg', stat: '' },
  { id: 5, img: '/svg/js-badge.svg', stat: '' },
  { id: 5, img: '/svg/js-badge.svg', stat: '' },
  { id: 6, img: '/svg/react.svg', stat: '' },
  { id: 6, img: '/svg/react.svg', stat: '' },
  { id: 7, img: '/svg/vue.svg', stat: '' },
  { id: 7, img: '/svg/vue.svg', stat: '' },
  { id: 8, img: '/svg/node-js.svg', stat: '' },
  { id: 8, img: '/svg/node-js.svg', stat: '' },
]

const CardList: React.FC = () => {
  const [cards, setCard] = useState<CardBlock[]>(
    DEFAULT_CARDS.sort(() => Math.random() - 0.5)
  )
  const [prevCard, setPrevCard] = useState(-1)

  const checkCard = (current: CardBlock['id']) => {
    if (current !== prevCard) {
      if (cards[current].id === cards[prevCard].id) {
        cards[current].stat = 'correct'
        cards[prevCard].stat = 'correct'
        setPrevCard(-1)
      } else {
        cards[current].stat = 'wrong'
        cards[prevCard].stat = 'wrong'
        setCard([...cards])
        setTimeout(() => {
          cards[current].stat = ''
          cards[prevCard].stat = ''
          setCard([...cards])
          setPrevCard(-1)
        }, 1000)
      }
    }
  }

  const restartGame = () => {
    setCard(DEFAULT_CARDS)
  }

  const handleClick = (id: CardBlock['id']) => {
    if (prevCard === -1) {
      cards[id].stat = 'active'
      setCard([...cards])
      setPrevCard(id)
    } else {
      checkCard(id)
    }
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
