import styles from './scss/Game.module.scss'
import CardList from './../components/CardList/'
import { useDispatch } from 'react-redux'
import { restartGame } from '../redux/slices/gameSlice'
import { Link } from 'react-router-dom'

const Game: React.FC = () => {
  const dispatch = useDispatch()
  const restart = () => {
    dispatch(restartGame())
  }
  return (
    <>
      <div className={styles.game}>
        <div className={styles.game__container}>
          <CardList />
        </div>
        <div className={styles.game__footer}>
          <button className={styles.game__btn} onClick={restart}>
            Restart game
          </button>
          <Link className={styles.game__btn} to='/' onClick={restart}>
            New Game
          </Link>
        </div>
      </div>
    </>
  )
}

export default Game
