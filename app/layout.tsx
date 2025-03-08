import "./globals.css"

import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FC3 x FCJ Community Day",
  description: "Learn, Network, and Explore the Latest in AWS Technologies",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

