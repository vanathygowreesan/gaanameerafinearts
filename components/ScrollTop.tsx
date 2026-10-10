'use client'
import { useEffect, useState } from 'react'

const C = 131.9 // circle circumference

export default function ScrollTop() {
  const [p, setP] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
      setShow(window.scrollY > 500)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button className={`totop${show ? ' show' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="3" />
        <circle cx="24" cy="24" r="21" fill="none" stroke="#e6c27a" strokeWidth="3" strokeLinecap="round" transform="rotate(-90 24 24)" strokeDasharray={C} strokeDashoffset={C * (1 - p)} />
        <path d="M17 28l7-8 7 8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
