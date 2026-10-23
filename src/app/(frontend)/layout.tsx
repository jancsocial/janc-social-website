import React from 'react'
import type { Viewport } from 'next'
import ViewportHeight from './ViewportHeight'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
}


export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" data-theme="light-theme">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body >
        <ViewportHeight />
        <main>{children}</main>
      </body>
    </html>
  )
}
