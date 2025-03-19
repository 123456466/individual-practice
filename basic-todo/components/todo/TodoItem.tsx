"use client";

import { completedTodo } from "@/api/todo-api";
import { Todo } from "@/type/todo-type";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  useCompletedTodoMutation,
  useDelTodoMutation,
} from "@/querys/useTodoMutation";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: delTodo } = useDelTodoMutation();
  const { mutate: completedTodo } = useCompletedTodoMutation();
  const { id, title, completed } = todo;

  return (
    <article className="flex flex-row items-center justify-between bg-gray-300 p-3 my-2 rounded-sm">
      <Link href={`/${id}`} className="w-auto">
        <h2 className={cn("hover:underline", { "line-through": completed })}>
          {title}
        </h2>
      </Link>
      <div>
        <Button onClick={() => completedTodo({ id, completed })}>
          {completed ? "취소" : "완료"}
        </Button>
        <Button
          onClick={() => delTodo(id)}
          className="mx-3"
          variant="destructive"
        >
          삭제
        </Button>
      </div>
    </article>
  );
};

export default TodoItem;
