'use client'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider, useTheme } from '../app/provider/themeProvider'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Chat-Assistant',
  description: 'Made by Markhor',
}

function ThemedLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors`}>
        {children}
      </body>
    </html>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemedLayout>{children}</ThemedLayout>
    </ThemeProvider>
  )
}
