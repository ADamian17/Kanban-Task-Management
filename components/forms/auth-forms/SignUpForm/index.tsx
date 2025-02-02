"use client";
import React from "react";
import { Field, Form, FormProps } from "react-final-form";

import { CreateUserMutationVariables } from "@/__generated__/graphql";
import { signUpAction } from "./sign-up-action";
import { validateEmail } from "@/lib/utils/validate-email";
import Button from "@/components/ui/Button";
import FormWrapper from "@/components/ui/FormWrapper";
import TextField from "@/components/ui/TextField";

import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const onSubmit: FormProps<CreateUserMutationVariables>["onSubmit"] = async (values) => {
    try {
      const signUp = signUpAction.bind(values);
      const res = await signUp(values);

      if (typeof res === "object" && "error" in res) {
        console.log(res.error);
        return;
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
          <div className={styles.fieldGroup}>
            <Field name="firstName" validate={(value) => (value ? undefined : "Can't be empty")}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={
                    (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
                    meta?.submitError
                  }
                  label="First name"
                  placeholder="e.g John"
                />
              )}
            </Field>

            <Field name="lastName" validate={(value) => (value ? undefined : "Can't be empty")}>
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={
                    (((meta?.error && meta?.touched) || meta.submitError) && meta.error) ||
                    meta?.submitError
                  }
                  label="Last name"
                  placeholder="e.g Doe"
                />
              )}
            </Field>
          </div>


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

          <Button type="submit" size="md" disabled={submitting}>Sign Up</Button>
        </FormWrapper>
      )}
    />
  );
};

export default SignUpForm;
