import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

const Registration = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Register your account</h3>
      <RegistrationForm />
    </div>
  );
};
export default Registration;

// {name: "marriammy78", email: "marriammy78@gmail.com", password: "marriammy78"}
// email
// :
// "marriammy78@gmail.com"
// name
// :
// "marriammy78"
// password
// :
// "marriammy78"
