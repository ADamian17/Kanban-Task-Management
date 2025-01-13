import Modal from "@/components/ui/Modal";
import Link from "next/link";
import React from "react";

const TaskPage = async ({ params }: { params: Promise<{ taskId: string; boardUri: string }>; }) => {
  const { taskId, boardUri } = await params;

  return (
    <Modal show={true}>
      <div>
        <Link href={`/${boardUri}/task/${taskId}/delete`}>delete</Link>
        <Link href={`/${boardUri}/task/${taskId}/edit`}>edit</Link>
      </div>

      <p>This is the task page</p>
    </Modal>
  );
};

export default TaskPage;
