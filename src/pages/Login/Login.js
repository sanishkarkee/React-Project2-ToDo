import React from 'react';
import NavBar from '../NavBar';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom';

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

        <Link to='/login/showInfo'>Show Login Information!</Link>

        <Route path='/login/showInfo'>
          {/* We can also render component here */}
          <div>This is dummy login and doesnt communicate with server.</div>
        </Route>
      </div>
    </>
  );
};

export default Login;
