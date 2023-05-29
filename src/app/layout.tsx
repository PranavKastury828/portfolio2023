import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pranav Kastury | Portfolio',
  description: `This is my portfolio. Check out some of my work and reach out to me if you'd like to hire a frontend developer!`,
  icons: {
    icon: 'https://assets-global.website-files.com/6343ef968b05c90cc51512d3/6343ef968b05c97f3315176e_62a57f994468e7419d7c5fce_61e7b0528334dc4d1e11ea54_beach_sq.jpeg'
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
