// app/ViewportHeight.tsx
'use client'

import { useEffect } from 'react'

export default function ViewportHeight() {
  useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`,
      )
    }

    resizeOps()
    window.addEventListener('resize', resizeOps)

    return () => window.removeEventListener('resize', resizeOps)
  }, [])

  return null
}

