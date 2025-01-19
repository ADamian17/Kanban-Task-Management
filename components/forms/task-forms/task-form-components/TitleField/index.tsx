import React from "react";
import { Field } from "react-final-form";

import TextField from "@/components/ui/TextField";

const TitleField = () => (
  <Field name="title" validate={(value) => (value ? undefined : "Can't be empty")}>
    {({ input, meta }) => (
      <TextField
        {...input}
        error={
          (((meta?.error && meta?.touched) || meta.submitError) && meta.error) || meta?.submitError
        }
        label="Title"
        placeholder="e.g. Take coffee break"
      />
    )}
  </Field>
);

export default TitleField;
