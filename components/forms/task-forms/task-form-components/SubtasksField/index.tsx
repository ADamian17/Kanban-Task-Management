import React from "react";

import { SubtaskInput } from "@/__generated__/graphql";
import DynamicInputFields from "@/components/features/DynamicInputFields";

type SubtasksFieldProps = {
  submitting: boolean;
  onRemove?: (subTask: SubtaskInput) => void;
};

const SubtasksField: React.FC<SubtasksFieldProps> = ({ submitting, onRemove }) => (
  <DynamicInputFields<SubtaskInput>
    buttonText={"Add new subtask"}
    fieldArrayName={"subtasks"}
    fieldName={"title"}
    label="Subtasks"
    onClickPlaceholder={{ title: "" }}
    onRemove={onRemove}
    submitting={submitting}
  />
);

export default SubtasksField;
