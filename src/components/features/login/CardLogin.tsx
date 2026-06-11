import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import LoginForm from "./LoginForm";

export default function CardLogin() {
  return (
    <Card>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
