import { redirect } from 'next/navigation'
import dynamic from 'next/dynamic'

import { getBoards } from "@/utils/board/getBoards";
import DashboardHeader from '@/layouts/DashboardHeader';
import ModalTrigger from '@/components/UI/Modal/ModalTrigger';
import Link from 'next/link';

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
      <DashboardHeader boardName={""} />

      <div>
        Create a Board to get started.

        <Link href="/add-board">
          + Add New Board
        </Link>
      </div>
    </>
  )
}
