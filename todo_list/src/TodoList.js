import { useState, useEffect } from 'react';
import Todo from './Todo';
import './TodoList.css';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    setTodoList(["One", "Two", "Three"]);
  }, []);

  const addTodo = e => {
    e.preventDefault();
    const currentList = todoList;
    setTodoList([...currentList, newName]);
    setNewName("");
  }

  const removeTodo = title => {
    console.log("Removing " + title);
    const newList = todoList.filter(todo=>todo !== title)
    setTodoList(newList);
  }

  return (
    <div className="container">
      {todoList.map(todo => <Todo title={todo} removeTodo={removeTodo}/>)}
      <form className="add_todo_form" onSubmit={addTodo}>
        <input
          type="text"
          value={newName}
          onChange={event => setNewName(event.target.value)}
        >
        </input>
        <button className="add_button">
          Add Todo
        </button>
      </form>
    </div>
  );
}