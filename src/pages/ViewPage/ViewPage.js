import React from 'react';
import NavBar from '../NavBar';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';

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

  //---- Using QUERY using useLocation() ----
  // const getLocation = useLocation(); //OP=> {pathname: '/view', search: '?id=0', hash: '', state: undefined, key: '0njz5n'}
  // const getURLParams = new URLSearchParams(getLocation.search);
  // const getId = getURLParams.get('id');
  // console.log(getId);
  // // console.log(getLocation.search); //OP=>  ?id=0
  // const getData = getStorage[getId];

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
    </>
  );
};

export default ViewPage;
