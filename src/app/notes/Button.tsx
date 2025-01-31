import { Button } from "@/components/ui/Button";
import React from "react";
import { useFormStatus } from "react-dom";

export default function ButtonComponent() {
  const { pending } = useFormStatus();
  return <Button type="submit">{pending ? "Adding..." : "Add"}</Button>;
}