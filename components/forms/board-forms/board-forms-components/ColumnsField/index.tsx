import React from "react";

import { ColumnInput } from "@/__generated__/graphql";
import DynamicInputFields from "@/components/features/DynamicInputFields";

type SubtasksFieldProps = {
  submitting: boolean;
  onRemove?: (column: ColumnInput) => void;
};

const ColumnsField: React.FC<SubtasksFieldProps> = ({ submitting, onRemove }) => (
  <DynamicInputFields<ColumnInput>
    buttonText="+ Add new column"
    fieldArrayName="columns"
    fieldName="name"
    label="Board Columns"
    onClickPlaceholder={{ name: "" }}
    onRemove={onRemove}
    placeholder="e.g. Todo"
    submitting={submitting}
  />
);

export default ColumnsField;
