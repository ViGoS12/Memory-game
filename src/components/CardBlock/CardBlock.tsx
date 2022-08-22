import styles from './CardBlock.module.scss'
import classNames from 'classnames'

interface ICardBlockProps {
  card: CardBlock
  handleClick: (id: CardBlock['id']) => void
  id: number
}

const CardBlock: React.FC<ICardBlockProps> = ({ card, handleClick, id }) => {
  console.log(card)
  return (
    <div
      onClick={() => handleClick(id)}
      className={classNames(styles.cardblock, {
        [styles.cardblock__open]: card.status === 'open',
        // [styles.cardblock__open]: card.status === '',
        // [styles.cardblock__open]: card.status === '',
      })}>
      <img className={styles.cardblock__img} src={card.img} alt='' />
    </div>
  )
}

export default CardBlock
