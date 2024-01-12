import { getBoard } from "@/utils/board/getBoard";
import DashboardHeader from "@/layouts/DashboardHeader";
import DashboardLayout from "@/layouts/Dashboard";

export const revalidate = 5;

const BoardDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getBoard(`/${params?.slug}/`)

  return (
    <DashboardLayout>
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
    </DashboardLayout>
  )
}

export default BoardDetailPage;
