'use client'
import { useEffect } from 'react'

/** Fades sections in as they scroll into view. Does nothing for reduced-motion users. */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    document.documentElement.classList.add('js')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    document.querySelectorAll('.stats,h2.t,.sub,.guru,.panel,details,.contact .wrap>*').forEach((el) => { el.classList.add('rv'); io.observe(el) })
    document.querySelectorAll('.why>div,.levels>.lv,.steps>li').forEach((el, n) => {
      ;(el as HTMLElement).style.setProperty('--i', String(n % 6))
      el.classList.add('rv'); io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return null
}
