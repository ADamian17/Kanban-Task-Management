"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

import { GetTaskQuery } from '@/__generated__/graphql';
import CurrentTaskStatus from '@/components/features/CurrentTaskStatus';
import Modal from '@/components/ui/Modal';
import SubtaskList from '@/components/features/SubtaskList';
import ThreeDots from '@/components/icons/ThreeDots';

import styles from './ViewTaskContainer.module.scss';

type ViewTaskPageProps = {
  boardUri: string;
  taskData: GetTaskQuery["getOneTask"];
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
  children?: React.ReactNode;
}

const ViewTaskContainer: React.FC<ViewTaskPageProps> = ({ boardUri, taskData, boardColumnsData }) => {
  const router = useRouter();
  const pathname = `/${boardUri}/task/${taskData?.id}`;

  const handleClose = () => router.push(`/${boardUri}/`);

  return (
    <Modal show={true} onClose={handleClose}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.title}>{taskData?.title}</p>

          <ThreeDots />
          {/* <div className={styles.actions}>
            <Link href={`/${boardUri}/task/${taskId}/delete`}>delete</Link>
            <Link href={`/${boardUri}/task/${taskId}/edit`}>edit</Link>
          </div> */}
        </div>

        <p className={styles.description}>{taskData?.description}</p>

        <SubtaskList pathname={pathname} subtasks={taskData?.subtasks} />

        <CurrentTaskStatus
          columns={boardColumnsData?.nodes}
          taskStatus={taskData?.status}
          pathname={pathname}
          taskId={taskData?.id}
        />
      </div>
    </Modal>
  );
}

export default ViewTaskContainer
