import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
// import Button from '@mui/material/Button';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSUbmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSUbmit}
      >
        <Form>
          <label>
            UserName
            <Field type="text" name="name" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>

          <button type="submit">Sigh Up!</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
