import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const AuthcheckBoolean = () => {
  const history = useHistory();

  let loggedIn = false;

  if (localStorage.getItem('loggedIn')) {
    loggedIn = true;
  }

  return loggedIn;
};

export default AuthcheckBoolean;
