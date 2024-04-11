import React from "react";

import { ColumnType } from "@/types";

import styles from "./Column.module.scss";
import { generateRandomRGB } from "@/utils/generateRandomRGB";

type ColumnProps = {
  data: ColumnType
};

const Column: React.FC<ColumnProps> = ({ data }) => {
  const { name, tasks } = data;
  const backgroundColor = generateRandomRGB()

  const tasksList = tasks && tasks.map(task => (<div key={task.id}>{task.title}</div>))

  return (
    <div className={styles.columnWrapper}>
      <h4 className={styles.headline}>
        <div style={{ backgroundColor }} className={styles.circle} />

        <span>
          {name}
        </span>
        <span>
          ({tasks.length})
        </span>
      </h4>

      <div>
        {tasksList}
      </div>
    </div>
  )
};

export default Column;