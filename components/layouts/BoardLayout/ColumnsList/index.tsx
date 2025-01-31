import React from "react";
import Link from "next/link";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import NewColumnCta from "@/components/layouts/BoardLayout/ColumnsList/NewColumnCta";

import styles from "./ColumnsList.module.scss";

type ColumnsListType = {
  columns: GetOneBoardByUriQuery["getOneBoard"]["columns"];
  boardUri: string;
  boardId: string;
};

const ColumnsList: React.FC<ColumnsListType> = ({ boardUri, boardId, columns }) => (
  <div className={styles.columnsListWrapper}>
    {(columns?.nodes ?? []).map((column) => (
      <div key={column?.id} className={styles.column}>
        <p className={styles.columnHeader}>
          <span style={{ ["--circle-bg" as string]: column?.columnColor }} className={styles.circle} />
          {column?.name} ({column?.tasks?.count})
        </p>

        <ul className={styles.taskList}>
          {(column?.tasks?.nodes ?? []).map((task) => (
            <Link key={task?.id} href={`${boardUri}task/${task?.id}`} className={styles.taskLink}>
              <li className={styles.task}>
                <p className={styles.title}>{task?.title}</p>

                <p className={styles.description}>
                  {task?.subtasks.completedSubtasks} of {task?.subtasks.count} subtasks
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    ))}

    <div className={styles.addColumn}>
      <NewColumnCta boardId={boardId} />
    </div>
  </div>
);

export default ColumnsList;
