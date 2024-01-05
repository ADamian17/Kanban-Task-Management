import { getBoard } from '@/utils/getBoard';
import DashboardHeader from '@/layouts/DashboardHeader';
import InitializeBoardStore from '@/components/InitializeBoardStore';

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
      <InitializeBoardStore boardId={data?.board.id} boardName={data?.board.name} />

      <DashboardHeader boardName={data?.board.name} />

      <section>
        {!data?.board?.columns.length && (
          <div>
            This board is empty. Create a new column to get started.
          </div>
        )}

        {data?.board?.columns && data?.board?.columns.map(column => (
          <div key={column?.id + "-" + column.name}>
            {column.name}
          </div>
        ))}
      </section>
    </>
  )
}
