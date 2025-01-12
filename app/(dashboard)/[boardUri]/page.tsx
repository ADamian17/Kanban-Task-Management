import { notFound } from "next/navigation";
import Link from "next/link";
import { executeApiReq } from "@/lib/utils/executeApiReq";
import { GetOneBoardByIdDocument } from "@/__generated__/graphql";
import EditBoardForm from "@/components/forms/board-forms/EditBoardForm";
import CreateTaskForm from "@/components/forms/task-forms/CreateTaskForm";

export const dynamic = 'force-dynamic';

const BoardPage = async ({ params }: {
  params: Promise<{ boardUri: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { boardUri } = await params;

  const data = await executeApiReq(GetOneBoardByIdDocument, {
    uri: `/${boardUri}/`,
  });

  if (!data?.getOneBoard?.id) {
    return notFound();
  }

  const { columns, name, id } = data.getOneBoard

  if (columns.count <= 0) return (
    <div>
      <p>This board is empty. Create a new column to get started.</p>
      <Link href={'?modal=add-new-column'}>Add New Column</Link>
    </div>
  )

  return (
    <>
      <div style={{ paddingBottom: "4rem", }}>
        <EditBoardForm boardId={id} boardName={name ?? ''} columns={columns?.nodes} />
      </div>

      <div style={{ padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginTop: 12 }}>
        {(columns?.nodes ?? []).map((column) => (
          <div key={column?.id}>
            <CreateTaskForm pathname={`/${boardUri}/`} />

            <div>
              <p>{column?.name} ({column?.tasks?.count})</p>

              <ul>
                {(column?.tasks?.nodes ?? []).map(task => (
                  <Link key={task?.id} href={`/${boardUri}?task-id=${task?.id}?modal=show-task`}>
                    <li>
                      <p style={{ wordBreak: "break-word" }}>{task?.title}</p>

                      <p style={{ wordBreak: "break-word" }}>
                        {task?.subtasks.completedSubtasks} of {task?.subtasks.count} subtasks
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BoardPage;
