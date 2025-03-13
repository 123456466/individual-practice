"use client";

import { completedTodo, delTodo } from "@/api/todo-api";
import { Todo } from "@/type/todo-type";
import Link from "next/link";
import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, completed } = todo;
  return (
    <article>
      <Link href={`/${id}`}>
        <h2>{title}</h2>
      </Link>
      <div>
        <button onClick={() => completedTodo(id, completed)}>
          {completed ? "취소" : "완료"}
        </button>
        <button onClick={() => delTodo(id)}>삭제</button>
      </div>
    </article>
  );
};

export default TodoItem;
