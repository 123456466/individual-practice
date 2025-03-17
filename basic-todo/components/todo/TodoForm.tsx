"use client";

import { createTodo } from "@/api/todo-api";
import { FormEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const TodoForm = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoTitle = formData.get("todo-title") as string;

    await createTodo(todoTitle);

    form.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-sm items-center space-x-2 outline outline-black-500 p-4 rounded-sm"
    >
      <Input
        type="text"
        placeholder="내용을 입력해주세요"
        name="todo-title"
        required
      />
      <Button type="submit">추가</Button>
    </form>
  );
};

export default TodoForm;
