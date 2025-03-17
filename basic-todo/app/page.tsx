import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import React from "react";

const HomePage = () => {
  return (
    <section className="p-15">
      <TodoForm />
      <TodoList />
    </section>
  );
};
export default HomePage;
