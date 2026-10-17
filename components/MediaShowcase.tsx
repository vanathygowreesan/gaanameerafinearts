type MediaItem = {
  title: string
  category: string
  provider: 'YouTube' | 'SoundCloud'
  embedUrl: string
  sourceUrl: string
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    title: 'Carnatic singing performance',
    category: 'Performance',
    provider: 'YouTube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/NMMmYekDlIQ',
    sourceUrl: 'https://youtu.be/NMMmYekDlIQ',
  },
  {
    title: 'An interview with Vanathy and her mother, Dr. Meera Villavarayar',
    category: 'Interview',
    provider: 'SoundCloud',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fvanathy-2%2Fmeera-vanathy-interview&color=%23c9953c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
    sourceUrl: 'https://soundcloud.com/vanathy-2/meera-vanathy-interview',
  },
]

export default function MediaShowcase() {
  return (
    <section id="media" className="wrap">
      <h2 className="t">Performances &amp; conversations</h2>
      <p className="sub">Music and conversations from Gaana Meera School of Fine Arts.</p>
      <div className="media-grid">
        {MEDIA_ITEMS.map((item) => (
          <article className="media-item" key={item.embedUrl}>
            <div className={`media-frame${item.provider === 'SoundCloud' ? ' audio' : ''}`}>
              <iframe
                src={item.embedUrl}
                title={`${item.title} on ${item.provider}`}
                loading="lazy"
                allow={item.provider === 'YouTube' ? 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' : 'autoplay'}
                referrerPolicy={item.provider === 'YouTube' ? 'strict-origin-when-cross-origin' : undefined}
                allowFullScreen={item.provider === 'YouTube'}
              />
            </div>
            <p className="media-kind">{item.category} · {item.provider}</p>
            <h3>{item.title}</h3>
            <a className="media-link" href={item.sourceUrl} target="_blank" rel="noreferrer">
              Open on {item.provider}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}