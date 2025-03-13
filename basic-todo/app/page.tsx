import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <TodoForm />
      <TodoList />
    </section>
  );
};
export default HomePage;
