"use client";
import React, { MouseEventHandler } from "react";
import isNil from "lodash/isNil";

import { completeSubtaskAction } from "./complete-subtask-action";
import { GetTaskQuery } from "@/__generated__/graphql";
import { revalidateBoardAction } from "@/lib/utils/revalidate-board-Action";
import Checkbox from "@/components/ui/Checkbox";

import styles from "./SubtaskList.module.scss";

type SubtaskListProps = {
  pathname: string;
  subtasks: GetTaskQuery["getOneTask"]["subtasks"];
};

const SubtaskList: React.FC<SubtaskListProps> = ({ pathname, subtasks }) => {
  const handleClick: MouseEventHandler<HTMLInputElement> = async (e) => {
    try {
      const id = e.currentTarget.id;
      const completed = e.currentTarget.checked;
      const formattedVars = { id, completed };
      const completeSubtask = completeSubtaskAction.bind(formattedVars);
      const res = await completeSubtask(formattedVars);

      if (!isNil(res?.completeSubtask?.success)) {
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p className={styles.subtasksHeader}>
        Subtasks ({subtasks?.completedSubtasks} of {subtasks?.count})
      </p>

      <ul className={styles.subtasks}>
        {(subtasks?.nodes ?? []).map((subtask) => (
          <li key={subtask?.id}>
            <Checkbox
              defaultChecked={subtask?.completed ?? false}
              id={subtask?.id}
              onClick={handleClick}
              text={subtask?.title ?? ""}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubtaskList;
