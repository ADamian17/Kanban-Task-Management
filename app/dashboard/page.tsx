import DashboardHeader from "@/layouts/DashboardHeader";
import { getBoards } from "@/utils/board/getBoards";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

const EmptyBoardPage = async () => {
  const data = await getBoards()

  if (data?.boards?.length > 0) {
    redirect(`/dashboard${data?.boards[0].uri}`)
  }

  return (
    <>
      <DashboardHeader boardName={""} pathname='/' />

      <div>
        Create a Board to get started.

        <Link href="/dashboard/add-board/">
          + Add New Board
        </Link>
      </div>
    </>
  )
}

export default EmptyBoardPage;
