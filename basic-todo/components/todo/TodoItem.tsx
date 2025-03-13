"use client";

import { completedTodo, delTodo } from "@/api/todo-api";
import { Todo } from "@/type/todo-type";
import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, completed } = todo;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <button onClick={() => completedTodo(id, completed)}>
          {completed ? "취소" : "완료"}
        </button>
        <button onClick={() => delTodo(id)}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
