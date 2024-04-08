// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './EditContactModal.module.css';

const EditContactModal = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(editContact({ id: contact.id, ...values }));
    onClose();
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.string().required('Required'),
  });

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={onClose}>
          &times;
        </span>
        <h2>Edit Contact</h2>
        <Formik
          initialValues={{
            name: contact.name,
            number: contact.number,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <label className={css.label}>Name:</label>
              <Field type="text" name="name" className={css.input} />
              <ErrorMessage name="name" component="div" className={css.error} />
              <label className={css.label}>Number:</label>
              <Field type="text" name="number" className={css.input} />
              <ErrorMessage
                name="number"
                component="div"
                className={css.error}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={css.button}
              >
                Save Changes
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditContactModal;
