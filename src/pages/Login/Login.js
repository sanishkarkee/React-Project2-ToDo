import React from 'react';
import NavBar from '../NavBar';
import { Link, Route, useHistory } from 'react-router-dom/cjs/react-router-dom';

const Login = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />

      <div className='todo_container'>
        <h3>Login Page</h3>

        {localStorage.getItem('loggedIn') ? (
          <>
            <h4>You're already logged in. </h4>
            <b
              style={{
                backgroundColor: 'maroon',
                color: 'white',
                padding: '10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => {
                localStorage.removeItem('loggedIn');
                history.push('/');
              }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You're successfully logged in!");
                history.replace('/');
                localStorage.setItem('loggedIn', true);
              }}
            >
              Login!
            </button>

            <br />
            <br />

            <Link to='/login/showInfo'>Nested Route | Show Info</Link>
            <Route path='/login/showInfo'>
              {/* We can also render component here */}
              <div>This is dummy login and doesnt communicate with server.</div>
            </Route>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
