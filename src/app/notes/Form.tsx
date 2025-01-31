"use client";

import { Input } from "@/components/ui/Input";
import { createTask } from "@/action/notes";
import ButtonComponent from "./Button";

export default function Form() {
  return (
    <form
      className="flex w-full max-w-sm items-center gap-2"
      action={createTask}
    >
      <Input type="text" placeholder="New task" name="text" />
      <ButtonComponent />
    </form>
  );
}