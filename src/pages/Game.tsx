import styles from './scss/Game.module.scss'
import CardList from './../components/CardList/'
import { useDispatch, useSelector } from 'react-redux'
import { restartGame } from '../redux/slices/gameSlice'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/store'

const Game: React.FC = () => {
  const dispatch = useDispatch()
  const { isWin } = useSelector((state: RootState) => state.game)

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
          {isWin && <>You won</>}
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
