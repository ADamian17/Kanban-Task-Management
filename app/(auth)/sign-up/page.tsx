import React from "react";

import SignInSignUpLayout from "@/components/layouts/SignInSignUpLayout";

const SignUpPage = () => (
  <SignInSignUpLayout
    title="Get Started with KTM"
    linkInfo={{
      copy: "Have an account?",
      text: "Sign in",
      path: "/sign-in",
    }}
  >
    sign up
  </SignInSignUpLayout>
);

export default SignUpPage;
