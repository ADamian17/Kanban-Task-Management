"use client";
import React from "react";
import { Form, FormProps } from "react-final-form";
import { useRouter } from "next/navigation";
import arrayMutators from "final-form-arrays";

import { createBoardAction } from "./create-board-action";
import Button from "@/components/ui/Button";
import ColumnsField from "../board-forms-components/ColumnsField";
import FormWrapper from "@/components/ui/FormWrapper";
import NameField from "../board-forms-components/NameField";
import { CreateBoardMutationVariables } from "@/__generated__/graphql";

const CreateBoardForm = () => {
  const router = useRouter();

  const onSubmit: FormProps<CreateBoardMutationVariables>["onSubmit"] = async (values) => {
    try {
      const createBoard = createBoardAction.bind(values);
      const res = await createBoard(values);

      if (typeof res === "object" && "error" in res) {
        return { name: res?.error }; // this is for form validation
      }

      if (res?.createBoard?.uri) {
        router.push(res?.createBoard?.uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      initialValues={{ columns: [{ name: "" }, { name: "" }] }}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <NameField />

          <ColumnsField submitting={submitting} />

          <Button type="submit" disabled={submitting}>
            Create New Board
          </Button>
        </FormWrapper>
      )}
    />
  );
};

export default CreateBoardForm;
