import DashboardHeader from '@/layouts/headers/DashboardHeader'
import { getBoard } from '@/utils/board-actions/get-board';
import type { Metadata } from 'next'

export default async function BoardRootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const data = await getBoard(`/${params?.slug}/`);

  return (
    <>
      <DashboardHeader boardName={data?.board?.name} pathname={`/${params?.slug}/`} />

      {children}
    </>
  )
}
