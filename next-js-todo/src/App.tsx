import { useEffect, useState } from "react";
import { getTodos, type Todo } from "./todos";
import "./App.css";

function App() {
  const [todoItme, setTodoItme] = useState<Todo[]>([]);
  useEffect(() => {
    getTodos().then((data) => setTodoItme(data));
  }, []);

  const [title, setTitle] = useState("");

  const upadteTitleHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const delTodoHandle = async (id: Todo["id"]) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });

    setTodoItme((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoList todoList={todoItme} ondelClick={delTodoHandle} />
      <input
        type="text"
        placeholder="할일을 적어주세요."
        onChange={upadteTitleHandle}
        value={title}
      />
      <button onClick={addTodoHandle}>등록</button>
    </>
  );
}

type TodoListProps = { todoList: Todo[]; ondelClick: (id: Todo["id"]) => void };
function TodoList({ todoList, ondelClick }: TodoListProps) {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDelClick={ondelClick} />
      ))}
    </>
  );
}

type TodoItemeProps = Todo & { onDelClick: (id: Todo["id"]) => void };
function TodoItem({ id, title, completed, onDelClick }: TodoItemeProps) {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{`${completed}`}</div>
      <button onClick={() => onDelClick(id)}>삭제</button>
    </div>
  );
}

export default App;
