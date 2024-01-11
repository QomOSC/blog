import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const inter = Vazirmatn({ 
  weight:'400',
  subsets: ['arabic'] }
)

export const metadata: Metadata = {
  metadataBase: new URL('https://qomosc.github.io/blog'),
  title: {
    default: 'جامعه متن باز قم',
    template: '%s | جامعه متن باز قم'
  },
  description: '',
  openGraph: {
    title: 'جامعه متن باز قم'
  },
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
