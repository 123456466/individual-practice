import TodoFilterSwitch from "@/components/todo/TodoFilterSwitch";
import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import React from "react";

const HomePage = () => {
  return (
    <section className="p-15">
      <TodoForm />
      <TodoFilterSwitch />
      <TodoList />
    </section>
  );
};
export default HomePage;
