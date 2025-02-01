"use client"
import React from 'react'
import { Field, Form, FormProps } from 'react-final-form'
import arrayMutators from "final-form-arrays";

import Button from '@/components/ui/Button'
import FormWrapper from '@/components/ui/FormWrapper'
import TextField from '@/components/ui/TextField'
import DynamicInputFields from '@/components/features/DynamicInputFields'
import { CreateColumnMutationVariables, TaskInput } from '@/__generated__/graphql';
import { newColumnAction } from './new-column-action';
import { revalidateBoardAction } from '@/lib/utils/revalidate-board-Action';

type NewColumnFormProps = {
  boardId: string
  pathname: string
}

const NewColumnForm: React.FC<NewColumnFormProps> = ({ boardId, pathname }) => {
  const onSubmit: FormProps<CreateColumnMutationVariables>["onSubmit"] = async (values) => {
    try {
      const newColumn = newColumnAction.bind(values);
      const res = await newColumn(values);

      if (typeof res === "object" && "error" in res) {
        return console.error(res?.error);
      }

      if (res?.createColumn?.id) {
        const revalidateBoard = revalidateBoardAction.bind(pathname);
        revalidateBoard(pathname);
      }
    } catch (error) {
      console.error(error)
    }
  }

  const initialValues = {
    boardId,
    tasks: [{ title: "" }, { title: "" }],
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Field name="boardId" type="hidden" component="input" />

          <Field name="name" validate={(value) => (value ? undefined : "Can't be empty")}>
            {({ input, meta }) => (
              <TextField
                {...input}
                error={
                  (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
                  meta?.submitError
                }
                label="Name"
                placeholder="e.g todo"
              />
            )}
          </Field>

          <DynamicInputFields<TaskInput>
            placeholder='e.g. take coffee break'
            buttonText={"Add new task"}
            fieldArrayName={"tasks"}
            fieldName={"title"}
            label="Column tasks"
            onClickPlaceholder={{ title: "" }}
            submitting={submitting}
          />

          <Button type="submit" size="md" disabled={submitting}>Add new column</Button>
        </FormWrapper>
      )}
    />
  );
}

export default NewColumnForm
