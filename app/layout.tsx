import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Biandré Streso',
  description: 'Portfolio of Biandre Streso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-cyan-300 selection:text-cyan-900"}>{children}</body>
    </html>
  )
}
