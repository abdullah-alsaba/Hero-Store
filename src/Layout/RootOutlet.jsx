// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Navbar from '../Components/Shared/Navbar/Navbar'
import Footer from '../Components/Shared/Footer/Footer'
import Loader from '../Components/Shared/Loader/Loader'

function RootOutlet() {
  const Navigation = useNavigation()
  return (
    <div>
      <Navbar></Navbar>
      {
        Navigation.state==="loading"&& <Loader></Loader>
      }
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default RootOutlet
