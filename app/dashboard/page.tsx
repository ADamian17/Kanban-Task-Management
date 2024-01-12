import { redirect } from "next/navigation";
import Link from "next/link";

import { getBoards } from "@/utils/board/getBoards";
import DashboardHeader from "@/layouts/DashboardHeader";
import DashboardLayout from "@/layouts/Dashboard";

const EmptyBoardPage = async () => {
  const data = await getBoards()

  if (data?.boards?.length > 0) {
    redirect(`/dashboard${data?.boards[0].uri}`)
  }

  return (
    <DashboardLayout>
      <DashboardHeader boardName={""} pathname='/' />

      <div>
        Create a Board to get started.

        <Link href="/dashboard/add-board/">
          + Add New Board
        </Link>
      </div>

    </DashboardLayout>
  )
}

export default EmptyBoardPage;
