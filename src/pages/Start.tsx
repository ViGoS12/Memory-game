import styles from './scss/Start.module.scss'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <>
      <div className={styles.game}>
        <Link to='/Game' className={styles.game__btn}>
          Play
        </Link>
      </div>
    </>
  )
}

export default Start
