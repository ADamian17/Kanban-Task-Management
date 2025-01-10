"use client";
import { Field, Form, FormProps } from "react-final-form";

export default function Home() {
  const onSubmit: FormProps["onSubmit"] = async (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="first_name">
              {(props) => (
                <div>
                  <label>First Name</label>
                  <input {...props.input} type="text" />
                </div>
              )}
            </Field>

            <Field name="last_name">
              {(props) => (
                <div>
                  <label>Last Name</label>
                  <input {...props.input} type="text" />
                </div>
              )}
            </Field>

            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}
