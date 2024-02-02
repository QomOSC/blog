import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Header className="w-[768px] mx-auto mt-14" />

        <main className='w-[768px] mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
