import { getBoards } from "@/utils/getBoards"
import Link from "next/link";

const BoardsList = async () => {
  const data = await getBoards()

  return (
    <div>
      <ul>
        {data?.boards && data?.boards.map((board: any) => (
          <li key={"board-link-" + board.id}>
            <Link href={`/dashboard${board.uri}`}>{board.name}</Link>
          </li>
        ))}
        <Link href={"/dashboard/add-board/"}>create new board</Link>
      </ul>
    </div>
  )
}

export default BoardsList
