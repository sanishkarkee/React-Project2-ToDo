import React from 'react';
import NavBar from '../NavBar';

const MainPage = () => {
  // const history = useHistory();

  // const login = () => {
  //   // Logic...
  //   // Success...

  //   history.push('/add');
  //   // OR
  //   // history.replace('/add'); //yesle chai browser ma user lai back button press garda previous content dekhaudaina
  // };

  const getTodo = localStorage.getItem('todo')
    ? JSON.parse(localStorage.getItem('todo'))
    : [];

  return (
    <>
      {/* This is main page. */}
      {/* <Link to='/add'>Goto add Page</Link> */}
      {/* <button onClick={login}>Login</button> */}
      <NavBar />

      <div className='todo_container'>
        <h3>Your to-do</h3>

        {getTodo.map((el) => {
          return (
            <>
              <div className='single_todo'>{el}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
