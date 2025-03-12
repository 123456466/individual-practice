export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export async function getTodos(): Promise<Todo[]> {
  const respons = await fetch("http://localhost:4000/todos");
  const data = await respons.json();

  return data;
}
