import { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { deleteTodo, toggleTodo } from "../store/todo";

const Todos = ({ store }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
      setTodos(store.getState().todos);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginBottom: 10,
            }}
          >
            {todo.desc}
            <button
              onClick={() => {
                deleteTodo(todo.id, store);
              }}
            >
              Del
            </button>
            <button
              onClick={() => {
                toggleTodo(todo.id, store);
              }}
            >
              Completed
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
