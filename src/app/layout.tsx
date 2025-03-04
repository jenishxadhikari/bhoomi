import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import '@/app/globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bhoomi',
  description: 'E-Government - Online land registration system',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  )
}
