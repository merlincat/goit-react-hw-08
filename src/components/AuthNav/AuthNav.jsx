import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const setLinkClass = ({ isActive }) => {
  return clsx(css.linkItem, isActive && css.linkActive);
};

const AuthNav = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/register" className={setLinkClass}>
        Sigh Up
      </NavLink>
      <NavLink to="/login" className={setLinkClass}>
        Log IN
      </NavLink>
    </nav>
  );
};

export default AuthNav;
