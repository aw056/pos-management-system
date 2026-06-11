"use client";

import CustomForm from "@/components/ui/custom-form";
import { useState } from "react";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  const fieldLogin = [
    {
      label: "Username",
      placeholder: "example123",
    },
    {
      label: "Password",
      placeholder: "******",
    },
    {
      label: "Confirm Password",
      placeholder: "******",
    },
  ];

  return (
    <div>
      <CustomForm
        title="Login to your account"
        desc="Enter yout credentials to accsess your account"
        field={fieldLogin}
      />
    </div>
  );
}
