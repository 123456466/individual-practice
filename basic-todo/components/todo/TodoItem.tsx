import { Todo } from "@/type/todo-type";
import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <div>
        <button>{todo.completed ? "취소" : "완료"}</button>
        <button>취소</button>
      </div>
    </div>
  );
};

export default TodoItem;
