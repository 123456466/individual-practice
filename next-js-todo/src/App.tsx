import { useEffect, useState } from "react";
import { getTodos, type Todo } from "./todos";
import "./App.css";

type completedTodo = Omit<Todo, "title">;

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

  const completedTodoHandel = async ({ id, completed }: completedTodo) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    setTodoItme((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoList
        todoList={todoItme}
        onDelClick={delTodoHandle}
        onCompletedClick={completedTodoHandel}
      />
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

type TodoListProps = {
  todoList: Todo[];
  onDelClick: (id: Todo["id"]) => void;
  onCompletedClick: (completedTodo: completedTodo) => void;
};
type TodoItemeProps = Todo & { onDelClick: (id: Todo["id"]) => void } & {
  onCompletedClick: (completedTodo: completedTodo) => void;
};

function TodoList({ todoList, onDelClick, onCompletedClick }: TodoListProps) {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDelClick={onDelClick}
          onCompletedClick={onCompletedClick}
        />
      ))}
    </>
  );
}

function TodoItem({
  id,
  title,
  completed,
  onDelClick,
  onCompletedClick,
}: TodoItemeProps) {
  return (
    <div>
      <div>{id}</div>
      <div onClick={() => onCompletedClick({ id, completed })}>{title}</div>
      <div>{`${completed}`}</div>
      <button onClick={() => onDelClick(id)}>삭제</button>
    </div>
  );
}

export default App;
