import { GetOneBoardByIdDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/lib/utils/executeApiReq";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleDashboardRootLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ boardUri: string }>;
}) => {
  const { boardUri } = await params;
  const data = await executeApiReq(GetOneBoardByIdDocument, {
    uri: `/${boardUri}/`
  });

  if (!data?.getOneBoard?.id) {
    return notFound();
  }

  const { columns, id } = data.getOneBoard;

  if (columns.count <= 0)
    return (
      <div>
        <p>This board is empty. Create a new column to get started.</p>
        <Link href={`?addNewColumn=${id}`}>Add New Column</Link>
      </div>
    );

  return (
    <div style={{ padding: "1rem", margin: "1rem auto", maxWidth: "1110px" }}>
      <Link href="/">Boards</Link>

      <div
        style={{
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: 12
        }}
      >
        {(columns?.nodes ?? []).map((column) => (
          <div key={column?.id}>
            <div>
              <p>
                {column?.name} ({column?.tasks?.count})
              </p>

              <ul>
                {(column?.tasks?.nodes ?? []).map((task) => (
                  <li key={task?.id}>
                    <Link href={`/${boardUri}/task/${task?.id}`}>
                      <p style={{ wordBreak: "break-word" }}>{task?.title}</p>
                    </Link>

                    <p style={{ wordBreak: "break-word" }}>
                      {task?.subtasks.completedSubtasks} of {task?.subtasks.count} subtasks
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default SingleDashboardRootLayout;
