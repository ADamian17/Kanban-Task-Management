"use client";
import React, { useRef } from "react";
import { Form, FormProps } from "react-final-form";
import { useRouter } from "next/navigation";
import arrayMutators from "final-form-arrays";

import { GetTaskQuery, SubtaskInput } from "@/__generated__/graphql";
import Button from "@/components/ui/Button";
import DescriptionField from "../task-form-components/DescriptionField";
import StatusField from "../task-form-components/StatusField";
import SubtasksField from "../task-form-components/SubtasksField";
import TitleField from "../task-form-components/TitleField";
import { editTaskAction } from "./edit-task-action";
import { revalidateBoardAction } from "../CreateTaskForm/revalidate-board-action";
import FormWrapper from "@/components/ui/FormWrapper";

type EditTaskFormProps = {
  pathname: string;
  taskData: GetTaskQuery["getOneTask"];
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
};

type EditTaskFormValues = {
  columnId: Record<"label" | "value", string>;
  description: string;
  subtasks: Array<SubtaskInput>;
  title: string;
};

const EditTaskForm: React.FC<EditTaskFormProps> = ({ pathname, taskData, boardColumnsData }) => {
  const router = useRouter();
  const removedSubtasks = useRef<Array<SubtaskInput>>([]);

  const onSubmit: FormProps<EditTaskFormValues>["onSubmit"] = async (values) => {
    pathname = `${pathname}/task/${taskData?.id}`;

    try {
      const editBoardData = {
        ...values,
        id: taskData?.id,
        subtasks: [...values?.subtasks, ...removedSubtasks.current],
        columnId: values.columnId?.value,
      };
      const editTask = editTaskAction.bind(editBoardData);
      const res = await editTask(editBoardData);

      if (typeof res === "object" && "error" in res) {
        return { name: res?.error }; // this is for form validation
      }

      if (res?.updateTask?.id) {
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);
        router.push(pathname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onRemove = (subTask: SubtaskInput) => {
    removedSubtasks.current.push({ ...subTask, _destroy: true });
  };

  const foundColumn = (boardColumnsData?.nodes ?? []).find(
    (column) => column?.name?.toLowerCase() === taskData?.status?.toLowerCase(),
  );
  const initialValues = {
    columnId: {
      label: foundColumn?.name ?? "",
      value: foundColumn?.id ?? "",
    },
    description: taskData?.description ?? "",
    subtasks: taskData.subtasks.nodes ?? [],
    title: taskData?.title ?? "",
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <TitleField />

          <DescriptionField />

          <SubtasksField submitting={submitting} onRemove={onRemove} />

          <StatusField boardColumnsData={boardColumnsData} />

          <Button type="submit" disabled={submitting}>
            Save changes
          </Button>
        </FormWrapper>
      )}
    />
  );
};

export default EditTaskForm;
