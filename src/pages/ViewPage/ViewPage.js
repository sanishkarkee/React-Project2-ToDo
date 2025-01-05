import React from 'react';
import NavBar from '../NavBar';
import {
  Link,
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom';
import AuthcheckBoolean from '../../middleware/AuthcheckBoolean';

const ViewPage = () => {
  const history = useHistory();

  //---- Using PARAMS useLocation() ----
  const getParams = useParams();
  // console.log(getParams.id); //getParams matra huda OP=> {id:'0'} -/- getParams.id huda OP => 0
  const getID = getParams.id;

  //   Index through bata chai localstorage bata data nikalne
  const getStorage = localStorage.getItem('todo')
    ? JSON.parse(localStorage.getItem('todo'))
    : []; // ['ram','shyam','hari','sita']

  //   console.log(getStorage[getID]); // OP => ram

  const getData = getStorage[getID];

  const deleteTodo = () => {
    getStorage.splice(getID, 1);
    //Updated ARRAY feri push gareko
    localStorage.setItem('todo', JSON.stringify(getStorage));
    history.replace('/');
  };

  return (
    <>
      <NavBar />

      <div className='todo_container'></div>

      <button
        onClick={() => {
          history.push('/');
        }}
        style={{ background: '#e7e7e7', color: '#666' }}
      >
        Go Back
      </button>

      <div
        style={{
          background: '#e7e7e7',
          margin: '20px',
          padding: '20px',
          fontSize: '20px',
        }}
      >
        {getData}
      </div>

      {AuthcheckBoolean() ? (
        <>
          <button style={{ background: '#e73f33' }} onClick={deleteTodo}>
            Delete To-do
          </button>
        </>
      ) : (
        <>
          <p>Login to see more options!</p>
          <Link to='/login'>Login now!</Link>
        </>
      )}
    </>
  );
};

export default ViewPage;
