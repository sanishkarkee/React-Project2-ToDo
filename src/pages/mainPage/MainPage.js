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

  return (
    <>
    

      {/* This is main page. */}
      {/* <Link to='/add'>Goto add Page</Link> */}
      {/* <button onClick={login}>Login</button> */}
      <NavBar />
      This is the main page.
    </>
  );
};

export default MainPage;