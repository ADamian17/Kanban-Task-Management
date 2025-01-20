"use client";
import React from "react";
import { signInAction } from "./sign-in-action";
import { Field, Form, FormProps } from "react-final-form";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { validateEmail } from "@/lib/utils/validate-email";

const SignInPage = () => {
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
    <div>
      <h1>Sign In Page</h1>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" validate={(value) => validateEmail(value)}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta?.error && meta?.touched && meta.error}
                  label="Email address"
                  placeholder="hello@gmail.com"
                />
              )}
            </Field>

            <Field name="password" validate={(value) => (value ? undefined : "Can't be empty")}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta?.error && meta?.touched && meta.error}
                  label="Password"
                  placeholder="Your password"
                />
              )}
            </Field>

            <Button type="submit" size="md" disabled={submitting}>Sign in</Button>
          </form>
        )}
      />
    </div>
  );
};

export default SignInPage;
