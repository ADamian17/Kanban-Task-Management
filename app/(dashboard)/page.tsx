import { AllBoardsDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/executeApiReq";
import Link from "next/link";

export default async function DashboardPage() {
  const data = await executeApiReq(AllBoardsDocument);

  if (!data?.getAllBoards?.nodes) return null;

  const { count, nodes: allBoards } = data.getAllBoards


  return (
    <div style={{ padding: "1rem", margin: "1rem auto", maxWidth: "1110px" }}>
      <h3>My boards | {count}</h3>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginTop: 12 }}>
        {allBoards.map((board) => (
          <Link key={board?.id} href={board?.uri ?? ''}>
            <li>
              <h4>{board?.name}</h4>
              <p>columns: {board?.columns.count}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
