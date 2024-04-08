import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSUbmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSUbmit}
      >
        <Form>
          <label className={css.label}>
            UserName
            <Field className={css.inputField} type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.inputField} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.inputField} type="password" name="password" />
          </label>

          <button className={css.submitBtn} type="submit">
            Sigh Up!
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
