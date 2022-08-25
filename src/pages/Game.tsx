import styles from './scss/Game.module.scss'

import Modal from './../components/UI/Modal/'
import Button from '../components/UI/Button'

import CardList from './../components/CardList/'

import { restartGame } from '../redux/slices/gameSlice'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

import { useCallback } from 'react'
import { Link } from 'react-router-dom'

const Game: React.FC = () => {
  const dispatch = useDispatch()
  const { isWin } = useSelector((state: RootState) => state.game)

  const restart = useCallback(() => {
    dispatch(restartGame())
  }, [])
  return (
    <>
      <div className={styles.game}>
        <div className={styles.game__container}>
          <CardList />
        </div>
        <div className={styles.game__footer}>
          <Button onClick={restart}>Restart game</Button>
          <Link to='/'>
            <Button onClick={restart}>New Game</Button>
          </Link>
        </div>
      </div>
      <Modal active={isWin} restart={restart} />
    </>
  )
}

export default Game
