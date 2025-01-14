"use client";
import { GetTaskQuery } from '@/__generated__/graphql';
import Modal from '@/components/ui/Modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

type ViewTaskPageProps = {
  boardUri: string;
  taskId: string;
  taskData: GetTaskQuery["getOneTask"];
}

const ViewTaskContainer: React.FC<ViewTaskPageProps> = ({ boardUri, taskId, taskData }) => {
  const router = useRouter();

  const handleClose = () => router.push(`/${boardUri}/`);

  return (
    <Modal show={true} onClose={handleClose}>
      <div>
        <Link href={`/${boardUri}/task/${taskId}/delete`}>delete</Link>
        <Link href={`/${boardUri}/task/${taskId}/edit`}>edit</Link>
      </div>

      <pre>{JSON.stringify(taskData, null, 2)}</pre>
    </Modal>
  );
}

export default ViewTaskContainer
