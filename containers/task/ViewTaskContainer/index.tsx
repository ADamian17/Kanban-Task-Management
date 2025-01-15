"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { GetTaskQuery } from '@/__generated__/graphql';
import Modal from '@/components/ui/Modal';
import Select from '@/components/ui/Select';
import ThreeDots from '@/components/icons/ThreeDots';

import styles from './ViewTaskContainer.module.scss';

type ViewTaskPageProps = {
  boardUri: string;
  taskId: string;
  taskData: GetTaskQuery["getOneTask"];
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
}

const ViewTaskContainer: React.FC<ViewTaskPageProps> = ({ boardUri, taskId, taskData, boardColumnsData }) => {
  const router = useRouter();

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

        <div>
          <p className={styles.subtasksHeader}>Subtasks ({taskData?.subtasks?.completedSubtasks} of {taskData?.subtasks?.count})</p>

          <ul className={styles.subtasks}>
            {(taskData?.subtasks?.nodes ?? []).map(subtask => (
              <li key={subtask?.id} className={styles.subtask}>
                <input className={styles.subtaskCheckbox} type="checkbox" defaultChecked={subtask?.completed ?? false} id={subtask?.id} />

                <label htmlFor={subtask?.id} className={styles.subtaskCheckboxLabel}>
                  <svg className={styles.subtaskCheckboxIcon} xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1.27588 3.06593L4.03234 5.82239L9.03234 0.822388" stroke="white" stroke-width="2" />
                  </svg>
                </label>

                <p className={styles.subtaskTitle}>{subtask?.title}</p>
              </li>
            ))}
          </ul>
        </div>

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
