import React from 'react'
import type { Viewport } from 'next'
import ViewportHeight from './ViewportHeight'
import { Nunito_Sans } from "next/font/google";
import './styles.css'

export const metadata = {
  description: 'You are here because the people you give the most to are the ones who treat you the worst',
  title: 'JanC Social',
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
}

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" data-theme="light-theme">
      <head>
        <link rel="icon" href="/JC_transparent.png" />
      </head>
      <body className={nunitoSans.className}>
        <ViewportHeight />
        <main>{children}</main>
      </body>
    </html>
  )
}
