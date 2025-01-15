import { SubtaskInput } from '@/__generated__/graphql';
import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import React from 'react'
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

type SubtasksFieldProps = {
  submitting: boolean;
  onRemove?: (subTask: SubtaskInput) => void
}

const SubtasksField: React.FC<SubtasksFieldProps> = ({ submitting, onRemove }) => (
  <FieldArray name="subtasks">
    {({ fields }) => (
      <div>
        <p>Subtasks</p>

        {fields.map((subtask, index) => (
          <div key={subtask} style={{ display: "flex", alignItems: "center" }}>
            <Field
              name={`${subtask}.title`}
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
                const removed = fields.remove(index);
                if (typeof onRemove === "function") onRemove(removed);
              }}
            >
              remove
            </div>
          </div>
        ))}

        <Button
          disabled={submitting}
          onClick={() => fields.push({ title: "" })}
          text="Add new subtask"
          type="button"
          variant="secondary"
        />
      </div>
    )}
  </FieldArray>
)

export default SubtasksField
