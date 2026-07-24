import React from "react";
import AuthLayout from "@/pages/auth/AuthLayout";
import AuthForm from "@/pages/auth/AuthForm";

const SignIn = () => (
  <AuthLayout>
    <AuthForm initialMode="signin" />
  </AuthLayout>
);

export default SignIn;