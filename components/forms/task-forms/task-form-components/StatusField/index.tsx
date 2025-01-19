import { GetTaskQuery } from "@/__generated__/graphql";
import SelectField from "@/components/ui/SelectField";
import React from "react";
import { Field } from "react-final-form";

type StatusFieldProps = {
  boardColumnsData: GetTaskQuery["getOneBoard"]["columns"];
};

const StatusField: React.FC<StatusFieldProps> = ({ boardColumnsData }) => (
  <Field name="columnId" validate={(opt) => (opt?.value ? undefined : "Can't be empty")}>
    {({ input }) => (
      <SelectField
        {...input}
        options={(boardColumnsData?.nodes ?? []).map((column) => ({
          label: column?.name ?? "",
          value: column?.id ?? "",
        }))}
        // error={(meta?.error && meta?.touched || meta.submitError) && meta.error || meta?.submitError}
        label="Status"
        onChange={(value) => input.onChange(value)}
        placeholder="Select status"
      />
    )}
  </Field>
);

export default StatusField;
