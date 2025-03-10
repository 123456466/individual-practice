import { useEffect, useState } from "react";
import { getTodos, type Todo } from "./todos";
import "./App.css";

function App() {
  const [todoItme, setTodoItme] = useState<Todo[]>([]);
  useEffect(() => {
    getTodos().then((data) => setTodoItme(data));
  }, []);

  const [title, setTitle] = useState("");

  const upadtaTodoHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addTodoHandle = async () => {
    if (title === "") {
      return alert("내용을 입력해주세요");
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    setTitle("");
  };

  return (
    <>
      <TodoList todoList={todoItme} />
      <input
        type="text"
        placeholder="할일을 적어주세요."
        onChange={upadtaTodoHandle}
        value={title}
      />
      <button onClick={addTodoHandle}>등록</button>
    </>
  );
}

type TodoListProps = { todoList: Todo[] };
function TodoList({ todoList }: TodoListProps) {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
}

function TodoItem({ id, title, completed }: Todo) {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{`${completed}`}</div>
    </div>
  );
}

export default App;
