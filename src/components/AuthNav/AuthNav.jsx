import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/registration">Sigh Up</NavLink>
      <NavLink to="/login">Log IN</NavLink>
    </nav>
  );
};

export default AuthNav;