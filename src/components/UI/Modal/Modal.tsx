import styles from './Modal.module.scss'

import classNames from 'classnames'

import Button from '../Button/index'

import { memo } from 'react'
import { Link } from 'react-router-dom'

interface IModalProps {
  active: Boolean
  restart: () => void
  clicks: number
}

const Modal: React.FC<IModalProps> = ({ active, restart, clicks }) => {
  return (
    <div
      className={classNames(styles.modal, {
        [styles.modal__active]: active,
      })}>
      <div
        className={classNames(styles.content, {
          [styles.content__active]: active,
        })}>
        Game Over
        <div>Clicks made {active && clicks}</div>
        <div className={styles.modal__buttons}>
          <Button onClick={restart}>Restart game</Button>
          <Link to='/'>
            <Button onClick={restart}>New Game</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default memo(Modal)
