import React from "react";
import Select from "@/components/ui/Select";
import isNil from "lodash/isNil";

import { GetTaskQuery } from "@/__generated__/graphql";
import { updateTaskStatusAction } from "./update-task-status-action";

import styles from "./CurrentTaskStatus.module.scss";
import { revalidateBoardAction } from "@/lib/utils/revalidate-board-Action";

type CurrentTaskStatusProps = {
  columns: GetTaskQuery["getOneBoard"]["columns"]["nodes"];
  pathname: string;
  taskId: string;
  taskStatus: GetTaskQuery["getOneTask"]["status"];
};

const CurrentTaskStatus: React.FC<CurrentTaskStatusProps> = ({
  columns,
  pathname,
  taskId,
  taskStatus,
}) => {
  columns = columns ?? [];
  const foundColumn = columns.find(
    (column) => column?.name?.toLowerCase() === taskStatus?.toLowerCase(),
  );

  const handleStatusChange = async (opt: Record<"label" | "value", string>) => {
    try {
      const formattedVars = {
        id: taskId,
        columnId: opt.value,
      };
      const updateTaskStatus = updateTaskStatusAction.bind(formattedVars);
      const res = await updateTaskStatus(formattedVars);

      if (!isNil(res?.updateTaskStatus?.id)) {
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p className={styles.currentStatusHeader}>Current Status</p>

      <Select
        options={columns.map((column) => ({
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
  );
};

export default CurrentTaskStatus;
