import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import RoadBlock from "./Components/RoadBlock";
import Footer from './Components/Footer'
import Breadcrumbs from './Components/BreadCrumbs'
import ScrollToTop from './Components/ScrollToTop'
import FloatingIcons from './Components/FloatingIcons'

function App() {

  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <Breadcrumbs/>
      <Outlet />
      <Footer/>
      <RoadBlock />
      <FloatingIcons />
    </div>
  )
}

export default App
