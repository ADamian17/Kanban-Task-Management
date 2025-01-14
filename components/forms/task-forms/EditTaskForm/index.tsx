"use client";
import React from "react";
import { Form, FormProps } from "react-final-form";
import { useRouter } from "next/navigation";
import arrayMutators from "final-form-arrays";

import { GetTaskQuery } from "@/__generated__/graphql";
import Button from "@/components/ui/Button";
import DescriptionField from "../task-form-components/DescriptionField";
import StatusField from "../task-form-components/StatusField";
import SubtasksField from "../task-form-components/SubtasksField";
import TitleField from "../task-form-components/TitleField";

type EditTaskFormProps = {
  pathname: string;
  taskData: GetTaskQuery["getOneTask"];
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
};

type EditTaskFormValues = {
  title: string;
  description: string;
  columnId: string;
};

const EditTaskForm: React.FC<EditTaskFormProps> = ({ pathname, taskData, boardColumnsData }) => {
  const router = useRouter();

  const initialValues = {
    title: taskData?.title ?? "",
    description: taskData?.description ?? "",
    columnId: taskData?.status,
  }

  const onSubmit: FormProps<EditTaskFormValues>["onSubmit"] = async (values) => {
    alert(JSON.stringify(values));
  }

  const onRemove = (subTask: Record<string, string | boolean>) => {
    alert(JSON.stringify(subTask));
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <TitleField />

          <DescriptionField />

          <SubtasksField submitting={submitting} onRemove={onRemove} />

          <StatusField boardColumnsData={boardColumnsData} />

          <Button type="submit" text="Create task" disabled={submitting} />
        </form>
      )}
    />
  );
};

export default EditTaskForm;
