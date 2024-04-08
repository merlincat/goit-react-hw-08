import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <h3>Please Log in</h3>
      <LoginForm />

      <div>
        Still does not have an account? Please
        <Link to="/register">register now!</Link>
      </div>
    </div>
  );
};
export default Login;
