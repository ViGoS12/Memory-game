import styles from './scss/Game.module.scss'
import CardList from './../components/CardList/'

const Game: React.FC = () => {
  return (
    <>
      <div className={styles.game}>
        <div className={styles.game__container}>
          <CardList />
        </div>
      </div>
    </>
  )
}

export default Game
