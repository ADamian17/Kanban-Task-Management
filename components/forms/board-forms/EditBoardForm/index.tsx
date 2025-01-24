"use client";
import React, { useRef } from "react";
import { Form, FormProps } from "react-final-form";
import arrayMutators from "final-form-arrays";

import { ColumnInput, GetOneBoardByUriQuery } from "@/__generated__/graphql";
import { editBoardAction } from "./edit-board-action";
import { onSuccessEditBoardAction } from "./on-success-edit-board-action";
import Button from "@/components/ui/Button";
import ColumnsField from "../board-forms-components/ColumnsField";
import FormWrapper from "@/components/ui/FormWrapper";
import NameField from "../board-forms-components/NameField";
import { useRouter } from "next/navigation";

type EditBoardFormProps = {
  boardId: string;
  boardName: string;
  columns: GetOneBoardByUriQuery["getOneBoard"]["columns"]["nodes"];
};

const EditBoardForm: React.FC<EditBoardFormProps> = ({ boardName, boardId, columns }) => {
  const router = useRouter();
  const removedColumns = useRef<Array<ColumnInput>>([]);

  const initialValues = {
    name: boardName ?? "",
    columns: (columns ?? []).map((col) => ({ name: col?.name ?? "", id: col?.id ?? "" })),
  };

  const onSubmit: FormProps["onSubmit"] = async (values) => {
    try {
      const editBoardData = {
        ...values,
        id: boardId,
        columns: [...values.columns, ...removedColumns.current],
      };

      const editBoard = editBoardAction.bind(editBoardData);
      const res = await editBoard(editBoardData);

      if (typeof res === "object" && "error" in res) {
        return { name: res?.error }; // this is for form validation
      }

      if (res?.updateBoard?.uri) {
        const onSuccess = onSuccessEditBoardAction.bind(res?.updateBoard?.uri);
        onSuccess(res?.updateBoard?.uri);
        router.push(res?.updateBoard?.uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onRemoveColumn = (column: ColumnInput) => {
    removedColumns.current.push({ ...column, _destroy: true });
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <NameField />

          <ColumnsField submitting={submitting} onRemove={onRemoveColumn} />

          <Button type="submit" disabled={submitting}>
            Save Changes
          </Button>
        </FormWrapper>
      )}
    />
  );
};

export default EditBoardForm;
