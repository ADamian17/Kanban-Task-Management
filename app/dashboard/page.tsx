import DashboardContent from "@/layouts/DashboardContent";
import DashboardHeader from "@/layouts/DashboardHeader";
import { getBoards } from "@/utils/getBoards";
import Link from "next/link";

const DashboardPage = async () => {
  const data = await getBoards()
  const showEmptyPage = data?.count && data.count <= 0;

  return (
    <>
      <DashboardHeader boardName={""} pathname='/' />

      <DashboardContent>
        {
          showEmptyPage ? (
            <div>
              Without projects
            </div>

          ) : (
            <div>
              {data?.boards && data?.boards.map((board: any) => (
                <li key={"board" + board.id}>
                  <Link href={`/dashboard${board.uri}`}>{board.name}</Link>
                </li>
              ))}
            </div>

          )
        }
      </DashboardContent>
    </>
  )
}

export default DashboardPage;
