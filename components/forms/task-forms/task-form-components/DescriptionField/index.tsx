import TextareaField from '@/components/ui/TextareaField'
import React from 'react'
import { Field } from 'react-final-form'

const DescriptionField = () => (
  <Field name="description" validate={(value) => (value ? undefined : "Can't be empty")}>
    {({ input, meta }) => (
      <TextareaField
        {...input}
        error={
          (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
          meta?.submitError
        }
        label="Description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
      />
    )}
  </Field>
)

export default DescriptionField
