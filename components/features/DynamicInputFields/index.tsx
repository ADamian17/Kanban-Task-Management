import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

import Button from '@/components/ui/Button'
import InputFieldWithRemoveIcon from '@/components/ui/InputFieldWithRemoveIcon'

import styles from './DynamicInputFields.module.scss'

type DynamicInputFieldsProps<T> = {
  buttonText: string;
  fieldArrayName: string;
  fieldName: string;
  label: string;
  onClickPlaceholder: T;
  onRemove?: (opt: T) => void;
  submitting: boolean;
}

function DynamicInputFields<T = Record<string, unknown>>({
  buttonText,
  fieldArrayName,
  fieldName,
  label,
  onClickPlaceholder,
  onRemove,
  submitting
}: DynamicInputFieldsProps<T>) {
  return (
    <FieldArray name={fieldArrayName}>
      {({ fields }) => (
        <div>
          <p className={styles.label}>{label}</p>

          <div className={styles.fieldsList}>
            {fields.map((subtask, index) => {
              const handleOnRemove = () => {
                const removed = fields.remove(index);
                if (typeof onRemove === "function") onRemove(removed);
              }

              return (
                <Field
                  name={`${subtask}.${fieldName}`}
                  validate={(value) => (value ? undefined : "Can't be empty")}
                  key={subtask}
                >
                  {({ input, meta }) => (
                    <InputFieldWithRemoveIcon
                      {...input}
                      error={
                        (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
                        meta?.submitError
                      }
                      onRemove={handleOnRemove}
                      placeholder='e.g. Make coffee'
                    />
                  )}
                </Field>
              )
            })}

            <Button
              disabled={submitting}
              onClick={() => fields.push({ ...onClickPlaceholder })}
              type="button"
              variant="secondary"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      )}
    </FieldArray>
  )
}

export default DynamicInputFields
