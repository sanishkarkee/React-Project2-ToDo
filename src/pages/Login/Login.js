import React from 'react';
import NavBar from '../NavBar';

const Login = () => {
  return (
    <>
      <NavBar />

      <div className='todo_container'>
        <h3>Login Page</h3>

        <button
          onClick={() => {
            localStorage.setItem('loggedIn', true);
          }}
        >
          Login!
        </button>
      </div>
    </>
  );
};

export default Login;
