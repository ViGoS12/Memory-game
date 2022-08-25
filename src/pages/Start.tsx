import styles from './scss/Start.module.scss'
import { Link } from 'react-router-dom'
import Button from './../components/UI/Button/'

const Start: React.FC = () => {
  return (
    <>
      <div className={styles.game}>
        <Link to='/Game'>
          <Button color='#c294fa'>Play</Button>
        </Link>
      </div>
    </>
  )
}

export default Start
