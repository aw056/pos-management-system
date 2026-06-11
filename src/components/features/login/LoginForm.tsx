"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, LockIcon, User } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      <FieldSet>
        <FieldLegend>Login to your account</FieldLegend>
        <FieldDescription>
          Enter your credentials to access your account
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <div className="relative">
              <Input placeholder="example123" className="ps-10" />
              <User className="absolute top-1.5 left-1.5 text-muted-foreground" />
            </div>
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <div className="relative">
              <Input placeholder="*******" className="ps-10 " />
              <LockIcon className="absolute top-1.5 left-1.5 text-muted-foreground" />
              <Button
                className="absolute right-1.5 text-muted-foreground"
                size="icon"
                variant="ghost"
              >
                <Eye />
              </Button>
            </div>
          </Field>
          <Field>
            <Button>Login</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
