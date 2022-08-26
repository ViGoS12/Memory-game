import styles from './scss/Start.module.scss'
import { Link } from 'react-router-dom'
import Button from './../components/UI/Button/'

const Start: React.FC = () => {
  return (
    <>
      <div className={styles.game}>
        <div className={styles.game__content}>
          <Link to='/Game'>
            <Button color='#c294fa'>Play</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Start
