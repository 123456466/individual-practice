"use client";

import { useTodoItemQuery } from "@/querys/useTodoQuery";
import TodoItem from "./TodoItem";

interface TodoDetailProps {
  id: string;
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo } = useTodoItemQuery(id);

  if (!todo) return <div>로딩중...</div>;

  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoDetail;
