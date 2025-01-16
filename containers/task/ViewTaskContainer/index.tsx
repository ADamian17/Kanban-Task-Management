"use client";
import React, { MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { GetTaskQuery } from '@/__generated__/graphql';
import Modal from '@/components/ui/Modal';
import Select from '@/components/ui/Select';
import SubtaskList from '@/components/features/SubtaskList';
import ThreeDots from '@/components/icons/ThreeDots';

import styles from './ViewTaskContainer.module.scss';


type ViewTaskPageProps = {
  boardUri: string;
  taskId: string;
  taskData: GetTaskQuery["getOneTask"];
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
  children?: React.ReactNode;
}

const ViewTaskContainer: React.FC<ViewTaskPageProps> = ({ boardUri, taskId, taskData, boardColumnsData }) => {
  const router = useRouter();
  const pathname = `/${boardUri}/task/${taskId}`;

  const handleClose = () => router.push(`/${boardUri}/`);

  const handleStatusChange = (value: Record<"label" | "value", string>) => {
    console.log(value);
  }

  const foundColumn = (boardColumnsData?.nodes ?? []).find(column => column?.name?.toLowerCase() === taskData?.status?.toLowerCase())

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

        <div>
          <p className={styles.currentStatusHeader}>Current Status</p>

          <Select
            options={(boardColumnsData?.nodes ?? []).map((column) => ({
              label: column?.name ?? "",
              value: column?.id ?? "",
            }))}
            onChange={handleStatusChange}
            placeholder="Select status"
            value={{
              label: foundColumn?.name ?? "",
              value: foundColumn?.id ?? "",
            }}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ViewTaskContainer
