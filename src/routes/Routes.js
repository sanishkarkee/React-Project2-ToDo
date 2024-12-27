import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom/cjs/react-router-dom';
import MainPage from '../pages/mainPage/MainPage';
import Login from '../pages/Login/Login';
import AddToDo from '../pages/add-todo/AddToDo';
import ViewPage from '../pages/ViewPage/ViewPage';
import NotFound from '../pages/notfound/NotFound';

const Routes = () => {
  // Bujne kura route ma pages hari declare gare paxi, components haru ma Routes.js import garirakhnu pardaina// direct to="/add" lekhe pugxa
  return (
    <>
      <BrowserRouter>
        <Switch>
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

          <Route path='/login' component={Login} />

          {/* Dynamic routing */}
          <Route path='/view/:id' component={ViewPage} exact />

          <Route path='*'>
            <NotFound />
          </Route>

          {/* Query using useLocation() */}
          {/* <Route path='/view' component={ViewPage} exact /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
