import { redirect } from 'next/navigation'

import { getBoards } from "@/utils/getBoards";
import { getBoard } from '@/utils/getBoard';
import DashboardHeader from '@/layouts/DashboardHeader';

type BoardDetailPageType = {
  params: {
    page: string[]
  }
}

export default async function BoardDetailPage({
  params,
}: BoardDetailPageType) {
  const data = await getBoard(`/${params?.page?.join("/")}/`)

  return (
    <>
      <DashboardHeader boardName={data?.board.name} />

      <section>
        {data?.board?.columns && data?.board?.columns.map(column => (
          <div key={column?.id + "-" + column.name}>
            {column.name}
          </div>
        ))}
      </section>
    </>
  )
}
