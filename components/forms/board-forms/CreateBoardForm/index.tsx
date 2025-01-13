"use client";
import React from "react";
import { Field, Form, FormProps } from "react-final-form";
import { useRouter } from "next/navigation";
import arrayMutators from "final-form-arrays";

import { createBoardAction } from "./create-board-action";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { FieldArray } from "react-final-form-arrays";

const CreateBoardForm = () => {
  const router = useRouter();

  const onSubmit: FormProps["onSubmit"] = async (values) => {
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
                            // const removedItem = { ...fields.remove(index), _destroy: true };
                            fields.remove(index);
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

            <Button type="submit" disabled={submitting} text="Create New Board" />
          </div>
        </form>
      )}
    />
  );
};

export default CreateBoardForm;
