"use client";
import React from "react";
import { Field, Form, FormProps } from "react-final-form";
import arrayMutators from 'final-form-arrays'

import { createTaskAction } from "./create-task-action";
import { FieldArray } from "react-final-form-arrays";
import { revalidateBoardAction } from "./revalidate-board-action";
import Button from "@/components/ui/Button";
import SelectField from "@/components/ui/SelectField";
import TextareaField from "@/components/ui/TextareaField";
import TextField from "@/components/ui/TextField";

type CreateTaskFormValues = {
  title: string;
  description: string;
  columnId: string
}

type CreateTaskFormProps = {
  pathname: string
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ pathname }) => {
  const onSubmit: FormProps<CreateTaskFormValues>["onSubmit"] = async (values) => {
    try {
      const createTask = createTaskAction.bind(values)
      const res = await createTask(values)

      if (typeof res === "object" && 'error' in res) {
        return console.error(res?.error);
      }

      if (res?.createTask?.id) {
        const revalidateBoard = revalidateBoardAction.bind(pathname)
        revalidateBoard(pathname)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} data-autofocus>
          <div>
            <Field
              name="title"
              validate={(value) => value ? undefined : 'Can\'t be empty'}
            >
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
                  label="Title"
                />
              )}
            </Field>

            <Field
              name="description"
              validate={(value) => value ? undefined : 'Can\'t be empty'}
            >
              {({ input, meta }) => (
                <TextareaField
                  {...input}
                  error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
                  label="Description"
                  placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                />
              )}
            </Field>

            <FieldArray name="subtasks">
              {({ fields }) => (
                <div>
                  <p>Subtasks</p>

                  {fields.map((subtask, index) => (
                    <div key={subtask} style={{ display: 'flex', alignItems: 'center' }}>
                      <Field
                        name={`${subtask}.title`}
                        validate={(value) => value ? undefined : 'Can\'t be empty'}
                      >
                        {({ input, meta }) => (
                          <TextField
                            {...input}
                            label='Column Name'
                            error={(meta?.error && meta?.touched) && meta.error}
                          />
                        )}
                      </Field>

                      <div onClick={() => { fields.remove(index) }}>
                        remove
                      </div>
                    </div>
                  ))}

                  <Button
                    disabled={submitting}
                    onClick={() => fields.push({ title: '' })}
                    text="Add new subtask"
                    variant="secondary"
                  />
                </div>
              )}
            </FieldArray>

            <Field name="columnId" validate={(value) => value ? undefined : 'Can\'t be empty'}>
              {({ input }) => (
                <input {...input} />
              )}
            </Field>

            <Button text='Create task' disabled={submitting} />
          </div>
        </form>
      )}
    />
  )
};

export default CreateTaskForm;
