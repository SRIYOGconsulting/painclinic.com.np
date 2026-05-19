import React, { Suspense, lazy, useEffect, useState } from 'react'
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
  const [showDeferredChrome, setShowDeferredChrome] = useState(false)

  useEffect(() => {
    const loadDeferredChrome = () => setShowDeferredChrome(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadDeferredChrome, { timeout: 3000 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timer = window.setTimeout(loadDeferredChrome, 2500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div>
      <Seo/>
      <ScrollToTop/>
      <Header/>
      <Breadcrumbs/>
      <Outlet />
      {showDeferredChrome && (
        <Suspense fallback={null}>
          <Footer/>
          <RoadBlock />
          <FloatingIcons />
        </Suspense>
      )}
    </div>
  )
}

export default App
