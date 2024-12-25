import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom';
import MainPage from '../pages/mainPage/MainPage';
import Login from '../pages/Login/Login';
import AddToDo from '../pages/add-todo/AddToDo';
import ViewPage from '../pages/ViewPage/ViewPage';

const Routes = () => {
  // Bujne kura route ma pages hari declare gare paxi, xomponents haru ma Routes.js import garirakhnu pardaina// direct to="/add" lekhe pugxa
  return (
    <>
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home' component={MainPage} exact />

      <Route path='/add' exact>
        {localStorage.getItem('loggedIn') ? (
          <>
            <AddToDo />
          </>
        ) : (
          <Redirect to='/login' />
        )}
      </Route>

      <Route path='/login' component={Login} exact />

      {/* Dynamic routing */}
      <Route path='/view/:id' component={ViewPage} exact />

      {/* Query using useLocation() */}
      {/* <Route path='/view' component={ViewPage} exact /> */}
    </>
  );
};

export default Routes;
