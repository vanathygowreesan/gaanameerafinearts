'use client'
import { useRef, useState } from 'react'
import { GALLERY, type Category, type Photo } from './gallery-data'

type Group = { event: string; list: Photo[] }

function groupByEvent(list: Photo[]): Group[] {
  const groups: Group[] = []
  list.forEach((p) => {
    const event = p.src ? p.event ?? '' : ''
    let g = groups.find((x) => x.event === event)
    if (!g) groups.push((g = { event, list: [] }))
    g.list.push(p)
  })
  return groups
}

export default function Gallery() {
  const [cat, setCat] = useState<Category>('festival')
  const [year, setYear] = useState('all')
  const [cur, setCur] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)

  const years = Object.keys(GALLERY[cat].years).sort((a, b) => Number(b) - Number(a))
  const blocks = years
    .filter((y) => year === 'all' || y === year)
    .map((y) => ({ year: y, groups: groupByEvent(GALLERY[cat].years[y]) }))
  const photos = blocks.flatMap((b) => b.groups.flatMap((g) => g.list)).filter((p) => p.src)
  const step = (d: number) => setCur((cur + d + photos.length) % photos.length)

  return (
    <section id="gallery" className="gallery">
      <div className="wrap">
        <h2 className="t">Gallery</h2>
        <div className="gtabs" role="tablist" aria-label="Gallery category">
          {(Object.keys(GALLERY) as Category[]).map((k) => (
            <button key={k} role="tab" aria-selected={k === cat} onClick={() => { setCat(k); setYear('all') }}>
              {GALLERY[k].name}
            </button>
          ))}
        </div>
        <div className="gyears" aria-label="Filter by year">
          {['all', ...years].map((y) => (
            <button key={y} aria-pressed={y === year} onClick={() => setYear(y)}>
              {y === 'all' ? 'All years' : y}
            </button>
          ))}
        </div>
        <div key={cat + year} className="swap" aria-live="polite">
          {blocks.map((b) => (
            <div className="yr" key={b.year}>
              <h3>{b.year}</h3>
              {b.groups.map((g, gi) => (
                <div className="ev" key={gi}>
                  {g.event && <h4>{g.event}</h4>}
                  <div className="grid">
                    {g.list.map((p, i) =>
                      p.src ? (
                        <button
                          className="tile"
                          key={i}
                          aria-label={`Open photo: ${p.caption}`}
                          onClick={() => { setCur(photos.indexOf(p)); dialog.current?.showModal() }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img loading="lazy" src={p.src} alt={p.caption} />
                        </button>
                      ) : (
                        <div className="tile" key={i}>
                          <span aria-hidden="true">♪</span>
                          <span className="cap">{p.caption}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <dialog className="lb" ref={dialog} aria-label="Photo viewer" onClick={(e) => { if (e.target === dialog.current) dialog.current?.close() }}>
        {photos[cur] && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[cur].src} alt={photos[cur].caption} />
            <p>{photos[cur].caption}</p>
          </>
        )}
        <div className="lbnav">
          <button onClick={() => step(-1)}>Previous</button>
          <button onClick={() => step(1)}>Next</button>
          <button onClick={() => dialog.current?.close()}>Close</button>
        </div>
      </dialog>
    </section>
  )
}
