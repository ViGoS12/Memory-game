import styles from './CardList.module.scss'
import { useState } from 'react'
import CardBlock from '../CardBlock'

const CardList: React.FC = () => {
  const [cards, setCard] = useState([
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
  ])

  return (
    <div className={styles.cardlist}>
      {cards.map((card, idx) => (
        <CardBlock key={idx} card={card} />
      ))}
    </div>
  )
}

export default CardList
