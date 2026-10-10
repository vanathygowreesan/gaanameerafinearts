'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const LINKS = [
  ['About', '#about'],
  ['Programs', '#programs'],
  ['Gallery', '#gallery'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
  ['Academy Hub', '#hub'],
]

export default function SiteHeader() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`top${solid ? ' solid' : ''}${open ? ' open' : ''}`} id="top">
      <div className="bar">
        <a className="brand" href="#top" aria-label="Gaana Meera School of Fine Arts, home">
          <Image src="/images/logo.png" alt="" width={351} height={369} priority />
          <span>Gaana Meera School of Fine Arts</span>
        </a>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mainnav"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav id="mainnav" aria-label="Main" onClick={(e) => { if ((e.target as HTMLElement).tagName === 'A') setOpen(false) }}>
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="btn" href="#contact">Join Now</a>
        </nav>
      </div>
    </header>
  )
}
