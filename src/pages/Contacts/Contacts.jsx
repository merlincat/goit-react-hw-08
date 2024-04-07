import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../../components/Loader/Loader';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispath = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader></Loader>}
      {error && <div>{error}</div>}
      <ContactList />
    </div>
  );
};
export default Contacts;
