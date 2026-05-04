import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import RoadBlock from "./Components/RoadBlock";
import Footer from './Components/Footer'
import Breadcrumbs from './Components/BreadCrumbs'
import ScrollToTop from './Components/ScrollToTop'
import FloatingIcons from './Components/FloatingIcons'
import Seo from './Components/Seo'

function App() {

  return (
    <div>
      <Seo/>
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
