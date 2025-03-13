import { Todo } from "@/type/todo-type";

const TODOS_URL = "http://localhost:4000/todo";

export const getTodos = async () => {
  const response = await fetch(TODOS_URL);
  const data: Todo[] = await response.json();

  return data;
};

export const createTodo = async (title: string) => {
  const response = await fetch(TODOS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, completed: false }),
  });

  const data: Todo = await response.json();

  return data;
};

export const delTodo = async (id: Todo["id"]) => {
  const response = await fetch(`TODOS_URL/${id}`, {
    method: "DELETE",
  });

  const data: Todo = await response.json();

  return data;
};

export const completedTodo = async (
  id: Todo["id"],
  completed: Todo["completed"]
) => {
  const response = await fetch(`TODOS_URL/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ completed: !completed }),
  });

  const data: Todo = await response.json();

  return data;
};
