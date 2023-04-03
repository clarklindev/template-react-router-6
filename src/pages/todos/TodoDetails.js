import React from 'react';

import { useParams, useLoaderData } from 'react-router-dom';

export const TodoDetails = () => {
  const { id } = useParams();

  //2. consume loader data
  const todo = useLoaderData();

  return (
    <div className='todo-details'>
      <h2>Todo Details</h2>
      <p>title: {todo.title}</p>
      <p>completed: {todo.completed.toString()}</p>
    </div>
  );
};

//1. loader function
export const todoDetailsLoader = async ({ params }) => {
  console.log('todoDetailsLoader');
  const { id } = params;
  const res = await fetch('http://localhost:4000/todos/' + id);
  return res.json();
};
