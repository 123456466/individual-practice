"use client";

import { createTodo } from "@/api/todo-api";
import { FormEvent } from "react";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        name="todo-title"
        required
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
