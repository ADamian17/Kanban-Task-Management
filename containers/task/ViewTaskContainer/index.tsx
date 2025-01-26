"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { GetTaskQuery } from "@/__generated__/graphql";
import CurrentTaskStatus from "@/components/features/CurrentTaskStatus";
import KebabDropdown, { KebabDropdownItem } from "@/components/ui/Dropdowns/KebabDropdown";
import Modal from "@/components/ui/Modal";
import SubtaskList from "@/components/features/SubtaskList";

import styles from "./ViewTaskContainer.module.scss";

type ViewTaskPageProps = {
  boardUri: string;
  taskData: GetTaskQuery["getOneTask"];
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
  children?: React.ReactNode;
};

const ViewTaskContainer: React.FC<ViewTaskPageProps> = ({
  boardUri,
  taskData,
  boardColumnsData,
}) => {
  const router = useRouter();
  const pathname = `/${boardUri}/task/${taskData?.id}`;
  const menuItems: KebabDropdownItem[] = [
    { label: "Edit task", uri: `${pathname}/edit`, type: "link" },
    { label: "delete task", uri: `${pathname}/delete`, isDelete: true, type: "link" },
  ];

  const handleClose = () => router.push(`/${boardUri}/`);

  return (
    <Modal show={true} onClose={handleClose}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.title}>{taskData?.title}</p>

          <KebabDropdown menuItems={menuItems} />
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
};

export default ViewTaskContainer;
