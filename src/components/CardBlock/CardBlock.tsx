import styles from './CardBlock.module.scss'

interface ICardBlockProps {
  card: CardBlock
}

const CardBlock: React.FC<ICardBlockProps> = ({ card }) => {
  console.log(card)
  return (
    <div className={styles.cardblock}>
      <img className={styles.cardblock__img} src={card.img} alt='' />
    </div>
  )
}

export default CardBlock
