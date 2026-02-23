/**
 * SCROLL TO TOP
 * =============
 * Scrolls the window to the top whenever the route changes.
 * This prevents landing halfway down the page after navigation.
 * Imported once in App.jsx — no need to edit this file.
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null  // renders nothing
}

export default ScrollToTop
