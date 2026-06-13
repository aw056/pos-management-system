import React from "react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./field";
import { Input } from "./input";
import { Button } from "./button";

type customFormProps = {
  title: string;
  desc?: string;
  field: {
    label: string;
    placeholder?: string;
  }[];
};

export default function CustomForm({ title, desc, field }: customFormProps) {
  return (
    <form>
      <FieldSet>
        <FieldLegend>{title}</FieldLegend>
        <FieldDescription>{desc}</FieldDescription>
        <FieldGroup>
          {field.map((item, i) => (
            <Field key={i}>
              <FieldLabel>{item.label}</FieldLabel>
              <Input placeholder={item.placeholder} />
            </Field>
          ))}
          <Field>
            <Button>Login</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
