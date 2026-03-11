import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePageAnimation() {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)
    
    return () => clearTimeout(timer)
  }, [location.pathname])

  return isVisible
}
