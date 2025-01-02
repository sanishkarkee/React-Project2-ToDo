import React, { useRef } from 'react';
import NavBar from '../NavBar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Authcheck from '../../middleware/Authcheck';
// NOTES: input field ko data haru hamile "state" use garera store/grab garthyeu,
// tara yesma chai hamile tyo kaam "useRef" use garera garxau

const AddToDo = () => {
  const todoText = useRef();

  const history = useHistory();

  // AUTH Check OR Using PROTECTED PAGE react router concept
  Authcheck();

  const addTodo = (e) => {
    e.preventDefault();
    console.log(todoText.current.value);

    // User le save to-do click gare paxi chai data lai localstorage ma save garna lai

    // The code does three key tasks:

    //- Retrieve existing to-dos from localStorage.
    //- Add the new to-do to that list.
    //- Save the updated list back to localStorage.

    // 1. Get the New To-do from the Input Field
    const todoString = todoText.current.value;

    // 2. Retrieve Existing To-dos from localStorage
    const initialTodo = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : [];

    // 3. Add the New To-do
    initialTodo.push(todoString);

    // 4. Save the Updated List Back to localStorage
    localStorage.setItem('todo', JSON.stringify(initialTodo));

    // Save to-do btn press gare paxi home page ma redirect garna lai
    history.push('/');
  };

  return (
    <>
      <NavBar />

      <div className='todo_container'>
        <h1>Add to-do:</h1>

        <form onSubmit={addTodo}>
          <input ref={todoText} type='text' />
          <button type='submit'>Save to-do</button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
