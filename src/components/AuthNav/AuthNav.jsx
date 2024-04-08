import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register">Sigh Up</NavLink>
      <NavLink to="/login">Log IN</NavLink>
    </nav>
  );
};

export default AuthNav;
