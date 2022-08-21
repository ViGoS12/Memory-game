import { memo } from 'react'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return <div className={styles.header}>Memory Game</div>
}

export default memo(Header)
