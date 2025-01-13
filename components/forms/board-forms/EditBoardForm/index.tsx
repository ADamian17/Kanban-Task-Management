"use client";
import React, { useCallback, useRef } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";

import { editBoardAction } from "./edit-board-action";
import { onSuccessEditBoardAction } from "./on-success-edit-board-action";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { GetOneBoardByIdQuery } from "@/__generated__/graphql";

type EditBoardFormProps = {
  boardId: string;
  boardName: string;
  columns: GetOneBoardByIdQuery["getOneBoard"]["columns"]["nodes"];
};

const EditBoardForm: React.FC<EditBoardFormProps> = ({ boardName, boardId, columns }) => {
  const removedColumns = useRef<Array<Record<string, string | boolean>>>([]);

  const initialValues = {
    name: boardName ?? "",
    columns: (columns ?? []).map((col) => ({ name: col?.name ?? "", id: col?.id ?? "" }))
  };

  const onSubmit: FormProps["onSubmit"] = async (values) => {
    try {
      const editBoardData = {
        ...values,
        id: boardId,
        columns: [...values.columns, ...removedColumns.current]
      };

      const editBoard = editBoardAction.bind(editBoardData);
      const res = await editBoard(editBoardData);

      if (typeof res === "object" && "error" in res) {
        return { name: res?.error }; // this is for form validation
      }

      if (res?.updateBoard?.uri) {
        const onSuccess = onSuccessEditBoardAction.bind(res?.updateBoard?.uri);
        onSuccess(res?.updateBoard?.uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onRemoveColumn = useCallback((col: Record<string, string | boolean>) => {
    removedColumns.current.push({ ...col, _destroy: true });
  }, []);

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} data-autofocus>
          <div>
            <Field name="name" validate={(value) => (value ? undefined : "Can't be empty")}>
              {({ input, meta }) => (
                <>
                  <TextField
                    {...input}
                    label="Board Name"
                    placeholder="e.g Web Design"
                    error={
                      (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
                      meta?.submitError
                    }
                  />
                </>
              )}
            </Field>

            <FieldArray name="columns">
              {({ fields }) => (
                <div>
                  {typeof fields?.length !== "undefined" && fields?.length > 0 && (
                    <p>Board Columns</p>
                  )}

                  {fields.map((column, index) => {
                    return (
                      <div key={column} style={{ display: "flex", alignItems: "center" }}>
                        <Field
                          name={`${column}.name`}
                          validate={(value) => (value ? undefined : "Can't be empty")}
                        >
                          {({ input, meta }) => (
                            <TextField
                              {...input}
                              label="Column Name"
                              error={meta?.error && meta?.touched && meta.error}
                            />
                          )}
                        </Field>

                        <div
                          onClick={() => {
                            const removedItem = fields.remove(index);
                            onRemoveColumn(removedItem);
                          }}
                        >
                          remove
                        </div>
                      </div>
                    );
                  })}

                  <Button
                    disabled={submitting}
                    onClick={() => fields.push({ name: "" })}
                    text="Add new column"
                    type="button"
                    variant="secondary"
                  />
                </div>
              )}
            </FieldArray>

            <Button type="submit" disabled={submitting} text="Save Changes" />
          </div>
        </form>
      )}
    />
  );
};

export default EditBoardForm;
