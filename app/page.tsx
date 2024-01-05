import { redirect } from 'next/navigation'
import dynamic from 'next/dynamic'

import { getBoards } from "@/utils/getBoards";
import DashboardHeader from '@/layouts/DashboardHeader';

const AddModalEmptyBoards = dynamic(() => import('@/components/AddModalEmptyBoards'), { ssr: false })

export default async function Home({
  params,
}: {
  params: {
    page: string[]
  }
}) {
  const data = await getBoards()

  if (!params?.page && data?.boards?.length > 0) {
    redirect(data?.boards[0].uri)
  }

  return (
    <>
      <AddModalEmptyBoards />
      <DashboardHeader boardName={""} />
    </>
  )
}
