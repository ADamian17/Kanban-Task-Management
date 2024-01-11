import { revalidatePath } from "next/cache";

import { getBoard } from "@/utils/board/getBoard";
import DashboardHeader from "@/layouts/DashboardHeader";

const BoardDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getBoard(`/${params?.slug}/`)
  revalidatePath(`/${params?.slug}/`)
  console.log({ data });

  return (
    <>
      <DashboardHeader boardName={data?.board.name} pathname={`/${params?.slug}/`} />

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

export default BoardDetailPage;
