import React, { useState,useEffect,useRef } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "../src/App.css"

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");
  const inputRef = useRef(null)

  useEffect(()=> {
    inputRef.current.focus();
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content) return;

    const newTodo = {
      id: Math.floor(Math.random() * 42894324),
      content,
      isCompleted: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setContent("")
  };

console.log(content);
  return (
    <div className="container">
        <h1>Todo App</h1>
      <form onSubmit={handleSubmit} className="todo-from">
        <input
          type="text"
          className="toto-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          ref={inputRef}
        />
        <button className="todo-button">Ekle</button>
      </form>

      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
