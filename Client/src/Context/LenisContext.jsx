// context/LenisContext.jsx
import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

const Context = createContext()

export function LenisProvider({ children }) {
  const lenis = useRef()

  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1,
      smooth: true,
    })

    function raf(time) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.current.destroy()
    }
  }, [])

  return <Context.Provider value={lenis.current}>{children}</Context.Provider>
}

export function useLenis() {
  return useContext(Context)
}