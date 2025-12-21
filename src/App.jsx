import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Menu from './components/Menu'
import CursorJellyBlob from './components/CursorJellyBlob'

function App() {
  const location = useLocation()

  // Scroll to top on route change, or to hash if present
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <CursorJellyBlob />
      <Menu />
      <Outlet />
    </>
  )
}

export default App
