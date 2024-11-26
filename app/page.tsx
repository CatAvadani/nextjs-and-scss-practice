'use client';
import { useState } from 'react';
import TodoForm, { FormData } from './components/todoForm/todoForm';
import './page.scss';

export default function Home() {
  const [todos, setTodos] = useState<FormData[]>([]);

  const addTodo = (todo: FormData) => {
    setTodos([...todos, todo]);
  };
  console.log('todos', todos);
  return (
    <div className='main-container'>
      <TodoForm addTodo={addTodo} />
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className='todo-item '>
            <h2 className='todo-text'>{todo.title}</h2>
            <p className='todo-text'>{todo.description}</p>
          </div>
        ))}
    </div>
  );
}
