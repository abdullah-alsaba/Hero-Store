// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Shared/Navbar/Navbar'
import Footer from '../Components/Shared/Footer/Footer'

function RootOutlet() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default RootOutlet
