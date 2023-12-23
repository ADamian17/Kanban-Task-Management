import { redirect } from 'next/navigation'

import { getBoards } from "@/utils/getBoards";
import { getBoard } from '@/utils/getBoard';

type BoardDetailPageType = {
  params: {
    page: string[]
  }
}

export default async function BoardDetailPage({
  params,
}: BoardDetailPageType) {
  const data = await getBoard(`/${params?.page?.join("/")}/`)
  console.log(data?.board?.columns);

  return (
    <div>
      {data?.board?.columns && data?.board?.columns.map(column => (
        <div key={column?.id + "-" + column.name}>
          {column.name}
        </div>
      ))}
    </div>
  )
}
