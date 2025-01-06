import Todos from "./components/Todos";
import store from "./store/store";
import { addTodo } from "./store/todo";
import { SyntheticEvent, useState } from "react";


function App() {
  const [input, setInput] = useState("");

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!input) return;
    addTodo(input, store);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Todos store={store} />
    </>
  );
}

export default App;
