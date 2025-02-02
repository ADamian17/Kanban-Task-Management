import React from "react";

import SignInSignUpLayout from "@/components/layouts/SignInSignUpLayout";
import SignUpForm from "@/components/forms/auth-forms/SignUpForm";

const SignUpPage = () => (
  <SignInSignUpLayout
    title="Get Started with KTM"
    linkInfo={{
      copy: "Have an account?",
      text: "Sign in",
      path: "/sign-in",
    }}
  >
    <SignUpForm />
  </SignInSignUpLayout>
);

export default SignUpPage;
