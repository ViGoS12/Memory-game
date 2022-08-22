import './CardBlock.scss'
import classNames from 'classnames'

interface ICardBlockProps {
  card: CardBlock
  handleClick: (id: CardBlock['id']) => void
  id: number
}

const CardBlock: React.FC<ICardBlockProps> = ({ card, handleClick, id }) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className={classNames(
        'cardblock',
        card.stat,
        card.stat ? 'cardblock__active' : ''
      )}>
      <img className='cardblock__img' src={card.img} alt='' />
    </div>
  )
}

export default CardBlock
