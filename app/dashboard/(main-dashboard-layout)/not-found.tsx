import DashboardHeader from '@/layouts/headers/DashboardHeader'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <DashboardHeader />

      <div>
        <h2>Board Not Found</h2>

        <Link href="/dashboard">Return to Dashboard</Link>
        <p>or</p>
        <p>Open Sidebar</p>
      </div>
    </>
  )
}