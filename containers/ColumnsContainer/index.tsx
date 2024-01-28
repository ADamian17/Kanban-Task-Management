import React from "react";

import styles from "./ColumnsContainer.module.scss";
import { Column } from "@/types";

type ColumnsContainerType = {
  columns: Column[] | undefined
};

const ColumnsContainer: React.FC<ColumnsContainerType> = ({ columns }) => {
  return <div>ColumnContainer</div>
};

export default ColumnsContainer;
