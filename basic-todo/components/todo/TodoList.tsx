"use client";

import React from "react";
import TodoItem from "./TodoItem";
import { useTodosQuery } from "@/querys/useTodoQuery";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";

const TodoList = () => {
  const { filter } = useTodoFilterStore;
  const { data: todos } = useTodosQuery(filter);

  if (!todos) return <div>로딩중...</div>;

  return (
    <ul className="outline outline-black-500 rounded-sm p-5">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
