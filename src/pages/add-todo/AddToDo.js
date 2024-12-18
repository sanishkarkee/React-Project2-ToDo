import React, { useRef } from 'react';
import NavBar from '../NavBar';
// NOTES: input field ko data haru hamile "state" use garera store/grab garthyeu,
// tara yesma chai hamile tyo kaam "useRef" use garera garxau

const AddToDo = () => {
  const todoText = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    console.log(todoText.current.value);
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
