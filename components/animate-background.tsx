"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/background.jpg)",
        }}
      />

      {/* Animated mandalas */}
      <div className="absolute inset-0">
        {/* Left rotating mandala */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 scale-[1.5] -translate-x-48">
          <div className="w-[24rem] h-[24rem] animate-spin-slow opacity-40">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <pattern
                  id="mandala-pattern-left"
                  patternUnits="userSpaceOnUse"
                  width="400"
                  height="400"
                >
                  <circle cx="200" cy="200" r="180" fill="none" stroke="rgb(251 191 36)" strokeWidth="2" opacity="0.6" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="rgb(251 191 36)" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="rgb(251 191 36)" strokeWidth="1" opacity="0.4" />
                  {Array.from({ length: 12 }).map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30} 200 200)`}>
                      <path d="M200 50 L210 80 L200 110 L190 80 Z" fill="rgb(251 191 36)" opacity="0.3" />
                      <path d="M200 80 L205 95 L200 110 L195 95 Z" fill="rgb(251 191 36)" opacity="0.4" />
                    </g>
                  ))}
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#mandala-pattern-left)" />
            </svg>
          </div>
        </div>

        {/* Right rotating mandala */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 scale-[1.5] translate-x-48">
          <div className="w-[24rem] h-[24rem] animate-spin-slow-reverse opacity-40">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <pattern
                  id="mandala-pattern-right"
                  patternUnits="userSpaceOnUse"
                  width="400"
                  height="400"
                >
                  <circle cx="200" cy="200" r="180" fill="none" stroke="rgb(251 191 36)" strokeWidth="2" opacity="0.6" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="rgb(251 191 36)" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="rgb(251 191 36)" strokeWidth="1" opacity="0.4" />
                  {Array.from({ length: 12 }).map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30} 200 200)`}>
                      <path d="M200 50 L210 80 L200 110 L190 80 Z" fill="rgb(251 191 36)" opacity="0.3" />
                      <path d="M200 80 L205 95 L200 110 L195 95 Z" fill="rgb(251 191 36)" opacity="0.4" />
                    </g>
                  ))}
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#mandala-pattern-right)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
    </div>
  )
}
