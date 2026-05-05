import React, { Suspense, lazy } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Breadcrumbs from './Components/BreadCrumbs'
import ScrollToTop from './Components/ScrollToTop'
import Seo from './Components/Seo'

const Footer = lazy(() => import('./Components/Footer'))
const RoadBlock = lazy(() => import('./Components/RoadBlock'))
const FloatingIcons = lazy(() => import('./Components/FloatingIcons'))

function App() {

  return (
    <div>
      <Seo/>
      <ScrollToTop/>
      <Header/>
      <Breadcrumbs/>
      <Outlet />
      <Suspense fallback={null}>
        <Footer/>
        <RoadBlock />
        <FloatingIcons />
      </Suspense>
    </div>
  )
}

export default App
