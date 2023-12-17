import type { Metadata } from 'next'

import { plusJakartaSans } from '@/assets/fonts'

import '@/styles/globals.scss'
import HandleTheme from '@/components/HandleTheme'

export const metadata: Metadata = {
  title: 'Kanban',
  description: 'Welcome to Kanban, your all-in-one task manager tool designed to revolutionize the way you organize, prioritize, and accomplish your daily tasks. Say goodbye to scattered to-do lists and hello to seamless productivity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        <HandleTheme />
        {children}
      </body>
    </html>
  )
}
