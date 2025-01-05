import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Authcheck = () => {
  const history = useHistory();

  // ---- Using PROTECTED PAGE react router concept ----
  // if (localStorage.getItem('loggedIn')) {
  //   // Do nothing....
  // } else {
  //   history.replace('/login');
  // }=-

  //  ---- OR ----
  // localStorage.getItem('loggedIn') ? (() => {})() : history.replace('/login');

  //  ---- OR ----
  !localStorage.getItem('loggedIn') && history.replace('/login');
};

export default Authcheck;
