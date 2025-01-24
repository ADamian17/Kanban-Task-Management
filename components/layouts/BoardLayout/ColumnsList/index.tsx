import React from "react";
import Link from "next/link";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";

import styles from "./ColumnsList.module.scss";

type ColumnsListType = {
  columns: GetOneBoardByUriQuery["getOneBoard"]["columns"];
  boardUri: string;
};

const ColumnsList: React.FC<ColumnsListType> = ({ columns, boardUri }) => (
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
      <Link href="#" className={styles.addColumnLink}>
        + New Column
      </Link>
    </div>
  </div>
);

export default ColumnsList;
