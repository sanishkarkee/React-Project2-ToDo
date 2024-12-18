import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import MainPage from '../pages/mainPage/MainPage';
import AddToDo from '../pages/add-todo/AddToDo';

const Routes = () => {
  // Bujne kura route ma pages hari decalre gare paxi, xomponents haru ma Routes.js import garirakhnu pardaina// direct to="/add" lekhe pugxa
  return (
    <>
      <Route path='/' component={MainPage} exact />
      <Route path='/add' component={AddToDo} exact />
    </>
  );
};

export default Routes;
