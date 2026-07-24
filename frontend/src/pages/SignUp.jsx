import React from "react";
import AuthLayout from "@/pages/auth/AuthLayout";
import AuthForm from "@/pages/auth/AuthForm";

const SignUp = () => (
  <AuthLayout>
    <AuthForm initialMode="signup" />
  </AuthLayout>
);

export default SignUp;