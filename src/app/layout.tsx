import './globals.css'
import { JetBrains_Mono, Space_Mono } from 'next/font/google'
import { Providers } from './providers'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const display = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://pranavkastury.com'),
  title: 'Pranav Kastury | Founding Engineer',
  description: `Pranav Kastury is a fullstack engineer who builds products from zero. Currently founding engineer at Maximor AI, previously at BitGo, Bureau.id, and Mutual Mobile.`,
  openGraph: {
    title: 'Pranav Kastury | Founding Engineer',
    description: 'Fullstack engineer who builds products from zero.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav Kastury | Founding Engineer',
    description: 'Fullstack engineer who builds products from zero.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pranav Kastury',
  jobTitle: 'Founding Fullstack Engineer',
  email: 'mailto:pranavkastury828@gmail.com',
  alumniOf: 'Osmania University',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Engineering', 'Python', 'FastAPI'],
  worksFor: { '@type': 'Organization', name: 'Maximor AI' },
  sameAs: [
    'https://www.linkedin.com/in/pranavkastury',
    'https://github.com/PranavKastury828',
    'https://twitter.com/PranavKastury',
    'https://www.youtube.com/@Grimmr57',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.variable} ${display.variable} grain scanlines`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
