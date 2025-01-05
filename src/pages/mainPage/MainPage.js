import React from 'react';
import NavBar from '../NavBar';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const MainPage = () => {
  const getTodo = localStorage.getItem('todo')
    ? JSON.parse(localStorage.getItem('todo'))
    : [];

  return (
    <>
      <NavBar />

      <div className='todo_container'>
        <h3>Your to-do</h3>

        {getTodo && getTodo.length > 0 ? (
          <>
            {getTodo.map((el, index) => {
              return (
                <>
                  <div className='single_todo'>
                    {el}

                    <Link to={`/view/${index}`}>
                      <FaRegEye size={'20px'} />
                    </Link>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <center>
              Nothing on your To-do <Link to='/add'>Add some</Link>
            </center>
          </>
        )}
      </div>
    </>
  );
};

export default MainPage;
