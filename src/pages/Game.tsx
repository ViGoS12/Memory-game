import styles from './scss/Game.module.scss'
import CardList from './../components/CardList/'
import { useDispatch } from 'react-redux'
import { restartGame } from '../redux/slices/gameSlice'

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
          <button onClick={restart}>Restart game</button>
        </div>
      </div>
    </>
  )
}

export default Game
