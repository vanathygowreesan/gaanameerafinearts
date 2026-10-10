import type { Metadata, Viewport } from 'next'
import { Spectral, Figtree } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const heading = Spectral({ subsets: ['latin'], weight: ['400', '600'], style: ['normal', 'italic'], variable: '--font-heading', display: 'swap' })
const body = Figtree({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Gaana Meera School of Fine Arts | Carnatic Music',
    template: '%s | Gaana Meera School of Fine Arts',
  },
  description: 'Structured Carnatic music classes for students of all ages, taught in Canada since 2009.',
  applicationName: 'Gaana Meera School of Fine Arts',
  keywords: [
    'Carnatic music lessons',
    'Carnatic vocal classes',
    'Indian classical music',
    'music classes for all ages',
    'Canada',
  ],
  authors: [{ name: 'Smt. Vanathy Gowreesan' }],
  creator: 'Gaana Meera School of Fine Arts',
  publisher: 'Gaana Meera School of Fine Arts',
  category: 'Education',
  icons: {
    icon: [{ url: '/images/logo.png', type: 'image/png' }],
    shortcut: ['/images/logo.png'],
    apple: [{ url: '/images/logo.png', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Gaana Meera School of Fine Arts',
    title: 'Gaana Meera School of Fine Arts | Carnatic Music',
    description: 'Structured Carnatic music classes for students of all ages, taught in Canada since 2009.',
  },
  twitter: {
    card: 'summary',
    title: 'Gaana Meera School of Fine Arts | Carnatic Music',
    description: 'Structured Carnatic music classes for students of all ages, taught in Canada since 2009.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y1H0GXLNXP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Y1H0GXLNXP');`}
        </Script>
      </body>
    </html>
  )
}
