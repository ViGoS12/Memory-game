import { Outlet } from 'react-router-dom'
import Header from '../components/header'

import { memo } from 'react'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default memo(AppLayout)
