import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label className={styles.label}>
            Email
            <Field className={styles.inputField} type="email" name="email" />
          </label>
          <label className={styles.label}>
            Password
            <Field
              className={styles.inputField}
              type="password"
              name="password"
            />
          </label>
          <button className={styles.submitBtn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
