import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Please Log in</h3>
      <LoginForm />

      <div className={css.text}>
        Still does not have an account? Please
        <Link to="/register" className={css.link}>
          register now!
        </Link>
      </div>
    </div>
  );
};
export default Login;
