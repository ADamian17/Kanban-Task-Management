"use client";
import React from "react";
import { Field, Form, FormProps } from "react-final-form";

import { signInAction } from "./sign-in-action";
import { validateEmail } from "@/lib/utils/validate-email";
import Button from "@/components/ui/Button";
import FormWrapper from "@/components/ui/FormWrapper";
import TextField from "@/components/ui/TextField";

const SignInForm = () => {
  const onSubmit: FormProps<{ email: string; password: string }>["onSubmit"] = async (values) => {
    try {
      const signIn = signInAction.bind(values);
      const res = await signIn(values);

      if (typeof res === "object" && res?.error) {
        throw new Error(res?.error, { cause: "SignInError" });
      }
    } catch (error) {
      if (error instanceof Error && error.cause === "SignInError") {
        console.error(error.message);
      }
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Field name="email" validate={(value) => validateEmail(value)}>
            {({ input, meta }) => (
              <TextField
                {...input}
                error={
                  (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
                  meta?.submitError
                }
                label="Email address"
                placeholder="hello@gmail.com"
              />
            )}
          </Field>

          <Field name="password" validate={(value) => (value ? undefined : "Can't be empty")}>
            {({ input, meta }) => (
              <TextField
                {...input}
                type="password"
                error={
                  (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
                  meta?.submitError
                }
                label="Password"
                placeholder="Your password"
              />
            )}
          </Field>

          <Button type="submit" size="md" disabled={submitting}>Sign in</Button>
        </FormWrapper>
      )}
    />
  );
};

export default SignInForm;
