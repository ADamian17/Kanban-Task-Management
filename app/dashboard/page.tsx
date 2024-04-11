import { getBoards } from "@/utils/board-actions/get-boards";
import BoardsGrid from "@/components/BoardsGrid";
import DashboardContent from "@/layouts/DashboardContent";
import DashboardSimpleHeader from "@/layouts/headers/DashboardSimpleHeader";

const DashboardPage = async () => {
  const data = await getBoards()
  const showEmptyPage = data?.count && data.count <= 0;
  const content = showEmptyPage ? (
    <div>
      Without projects
    </div>
  ) : (
    <BoardsGrid boards={data?.boards} count={data?.count} />
  )

  return (
    <>
      <DashboardSimpleHeader count={data?.count} />

      <DashboardContent>
        {content}
      </DashboardContent>
    </>
  )
}

export default DashboardPage;
