import { getTodos } from "@/api/todo-api";
import TodoFilterSwitch from "@/components/todo/TodoFilterSwitch";
import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos(),
  });
  return (
    <section className="p-15">
      <TodoForm />
      <TodoFilterSwitch />
      <TodoList />
    </section>
  );
};
export default HomePage;
