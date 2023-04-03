import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

export const Todos = () => {
  const todos = useLoaderData();

  return (
    <div className='todos'>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <Link to='/' key={todo.id}>
          <p>{todo.title}</p>
        </Link>
      ))}
    </div>
  );
};

export const todosLoader = async () => {
  console.log('todosLoader');
  const res = await fetch('http://localhost:4000/todos');

  return res.json();
};
