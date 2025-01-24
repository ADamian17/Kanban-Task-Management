import TextField from '@/components/ui/TextField'
import React from 'react'
import { Field } from 'react-final-form'

const NameField = () => (
  <Field name="name" validate={(value) => (value ? undefined : "Can't be empty")}>
    {({ input, meta }) => (
      <TextField
        {...input}
        label="Board Name"
        placeholder="e.g Web Design"
        error={
          (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
          meta?.submitError
        }
      />
    )}
  </Field>
)

export default NameField
