import styles from './scss/Game.module.scss'

import Modal from './../components/UI/Modal/'
import Button from '../components/UI/Button'

import CardList from './../components/CardList/'

import { restartGame, setTime } from '../redux/slices/gameSlice'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

import { memo, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Game: React.FC = () => {
  const dispatch = useDispatch()
  const { isWin, clicks, time } = useSelector((state: RootState) => state.game)

  const restart = useCallback(() => {
    dispatch(restartGame())
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      !isWin && dispatch(setTime(time + 1))
    }, 1000)
    return () => clearTimeout(timer)
  }, [time])

  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60

  const timeDisplay = (time: number) => {
    return String(time).padStart(2, '0')
  }

  return (
    <>
      <div className={styles.game}>
        <div className={styles.game__container}>
          <CardList />
        </div>
        <div className={styles.game__footer}>
          <div>Clicks {clicks}</div>
          <Button onClick={restart}>Restart game</Button>
          <Link to='/'>
            <Button onClick={restart}>New Game</Button>
          </Link>
          <div className={styles.game__timer}>
            Time:
            <span> {timeDisplay(minutes)}</span>
            <span>:</span>
            <span>{timeDisplay(seconds)}</span>
          </div>
        </div>
      </div>
      <Modal
        active={isWin}
        restart={restart}
        clicks={clicks}
        time={timeDisplay(minutes) + ':' + timeDisplay(seconds)}
      />
    </>
  )
}

export default memo(Game)
