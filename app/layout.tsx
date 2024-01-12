import type { Metadata } from 'next'

import { plusJakartaSans } from '@/assets/fonts'
import HandleTheme from '@/components/HandleTheme'

import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Kanban',
  description: 'Welcome to Kanban, your all-in-one task manager tool designed to revolutionize the way you organize, prioritize, and accomplish your daily tasks. Say goodbye to scattered to-do lists and hello to seamless productivity.',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <html lang="en">
    <body className={plusJakartaSans.variable}>
      <HandleTheme />

      {children}
    </body>
  </html>
)

export const revalidate = 500

export default RootLayout
