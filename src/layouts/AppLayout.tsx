import { Outlet } from 'react-router-dom'
import Header from '../components/header'

import { memo } from 'react'

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default memo(AppLayout)
