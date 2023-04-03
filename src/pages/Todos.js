import React from 'react';

export const Todos = () => {
  return <div>Todos</div>;
};

export const todosLoader = async () => {
  const res = await fetch('http://localhost:4000/todos');
};
