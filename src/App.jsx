import axios from 'axios';
import { useEffect, useState } from 'react';
import { Todo } from './Todo';
import './App.css';
export function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1');
    setTodos(response.data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  const onComplete = id => {
    const newTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    console.log(todos[1]);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <main>
        <h1>Todos</h1>
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} onChange={() => onComplete(todo.id)} />
          ))}
        </ul>
      </main>
    </div>
  );
}
