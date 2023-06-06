import './globals.css'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'INFINITE DRIVING - THE GAME',
  description: 'Infinite Driving is an Unity Game where gamers can achieve the most record possible and have a chance to appear on ranking with 10 best players of the world. This game is hosted on website made for it.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
