import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - Kanban',
}

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
