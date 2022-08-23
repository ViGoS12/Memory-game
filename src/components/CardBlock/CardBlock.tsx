import styles from './CardBlock.module.scss'
import classNames from 'classnames'
import { useState } from 'react'

interface ICardBlockProps {
  card: CardBlock
  handleClick: (id: CardBlock['id']) => void
  id: number
}

const CardBlock: React.FC<ICardBlockProps> = ({ card, handleClick, id }) => {
  const [isOpen, setIsOpen] = useState(false)

  const setOpen = () => {
    setIsOpen(true)
  }

  console.log(card)
  return (
    <div
      className={classNames(styles.cardblock, {
        [styles.cardblock__flipped]: isOpen,
      })}
      onClick={setOpen}>
      <div className={styles.cardblock__front}>
        <img className={styles.cardblock__img} src={card.img} alt='' />
      </div>
      <div className={styles.cardblock__back}></div>
    </div>
  )
}

export default CardBlock
