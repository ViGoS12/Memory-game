import styles from './Button.module.scss'
import { ReactNode } from 'react'
import { memo } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  color?: string
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className={styles.button}
      style={{ backgroundColor: props.color || '#1cdfc8' }}>
      {children}
    </button>
  )
}

export default memo(Button)
