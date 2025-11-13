import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Breadcrumbs from './Components/BreadCrumbs'

function App() {

  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
