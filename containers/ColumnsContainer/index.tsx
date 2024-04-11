import React from "react";

import styles from "./ColumnsContainer.module.scss";
import { ColumnType } from "@/types";
import EmptyBoard from "@/components/EmptyBoard";
import Column from "@/components/Column";

type ColumnsContainerType = {
  columns: ColumnType[] | undefined
  slug: string
};

const ColumnsContainer: React.FC<ColumnsContainerType> = ({ columns, slug }) => {
  const isEmptyBoard = columns && columns?.length <= 0;

  if (isEmptyBoard) return <EmptyBoard slug={slug} />

  const ColumnsList = columns?.map((col) => (<Column key={col.id} data={col} />))

  return (
    <div className={styles.container}>
      {ColumnsList}
    </div>
  )
};

export default ColumnsContainer;
