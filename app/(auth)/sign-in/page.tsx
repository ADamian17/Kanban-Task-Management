import React from "react";

import SignInSignUpLayout from "@/components/layouts/SignInSignUpLayout";
import SignInForm from "@/components/forms/auth-forms/SignInForm";

const SignInPage = () => (
  <SignInSignUpLayout
    title="Welcome back to KTM"
    linkInfo={{
      copy: "Don't have an account?",
      text: "Sign up",
      path: "/sign-up"
    }}
  >
    <SignInForm />
  </SignInSignUpLayout>
);

export default SignInPage;
