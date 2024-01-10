import type { Metadata } from 'next'

import { plusJakartaSans } from '@/assets/fonts'
import DashboardLayout from '@/layouts/Dashboard'
import HandleTheme from '@/components/HandleTheme'
import ModalContainer from '@/containers/ModalContainer'

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

      <DashboardLayout>
        {children}
      </DashboardLayout>

      <ModalContainer />
    </body>
  </html>
)

export const revalidate = 500

export default RootLayout