import { getTodos } from "@/api/todo-api";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = async () => {
  const todos = await getTodos();

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
