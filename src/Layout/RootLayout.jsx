import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar'



const RootLayout = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
