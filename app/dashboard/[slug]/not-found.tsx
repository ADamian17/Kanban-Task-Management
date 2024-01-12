import Link from 'next/link'

import DashboardHeader from '@/layouts/DashboardHeader'

export default function NotFound({ params }: { params: { slug: string } }) {
  return (
    <>
      <DashboardHeader boardName="" pathname='' />

      <div>
        <h2>Board Not Found</h2>

        <p>Could not find requested board</p>

        <Link href="/dashboard">Return Home</Link>
      </div>
    </>
  )
}