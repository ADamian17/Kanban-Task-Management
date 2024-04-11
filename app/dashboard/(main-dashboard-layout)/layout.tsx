import type { Metadata } from 'next'

import DashboardLayout from "@/layouts/Dashboard";

export const metadata: Metadata = {
  title: 'Dashboard - Kanban',
}

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
