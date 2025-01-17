"use client";
import React from "react";
import { Form, FormProps } from "react-final-form";
import arrayMutators from "final-form-arrays";

import { createTaskAction } from "./create-task-action";
import { revalidateBoardAction } from "./revalidate-board-action";
import Button from "@/components/ui/Button";
import StatusField from "../task-form-components/StatusField";
import SubtasksField from "../task-form-components/SubtasksField";
import DescriptionField from "../task-form-components/DescriptionField";
import TitleField from "../task-form-components/TitleField";
import { GetTaskQuery } from "@/__generated__/graphql";
import { useRouter } from "next/navigation";
import FormWrapper from "@/components/ui/FormWrapper";

type CreateTaskFormValues = {
  title: string;
  description: string;
  columnId: Record<"label" | "value", string>
};

type CreateTaskFormProps = {
  pathname: string;
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
};

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ pathname, boardColumnsData }) => {
  const router = useRouter();

  const onSubmit: FormProps<CreateTaskFormValues>["onSubmit"] = async (values) => {
    try {
      const formattedValues = {
        ...values,
        columnId: values.columnId.value,
      };

      const createTask = createTaskAction.bind(formattedValues);
      const res = await createTask(formattedValues);

      if (typeof res === "object" && "error" in res) {
        return console.error(res?.error);
      }

      if (res?.createTask?.id) {
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);
        router.push(pathname);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      initialValues={{ subtasks: [{ title: '' }, { title: '' }] }}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <TitleField />

          <DescriptionField />

          <SubtasksField submitting={submitting} />

          <StatusField boardColumnsData={boardColumnsData} />

          <Button type="submit" text="Create task" disabled={submitting} />
        </FormWrapper>
      )}
    />
  );
};

export default CreateTaskForm;
