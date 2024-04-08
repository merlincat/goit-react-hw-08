import css from './Home.module.css';
import { IoIosContacts } from 'react-icons/io';
import { BsFilterCircleFill } from 'react-icons/bs';
import { MdPersonalInjury } from 'react-icons/md';
import { FaHandsClapping } from 'react-icons/fa6';
const Home = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Welcome to your best ContactList!</h2>
      <p className={css.parag}>
        This is a web application designed for managing your phone contacts
        efficiently. With our app, you can easily store and organize your
        contacts, allowing you to access them whenever you need.
      </p>
      <p className={css.parag}>Key features include:</p>
      <ul className={css.list}>
        <li className={css.listItem}>
          <IoIosContacts className={css.icon} />
          Contact Management: Add, edit, and delete contacts effortlessly. Keep
          your contacts organized and up-to-date.
        </li>
        <li className={css.listItem}>
          <BsFilterCircleFill className={css.icon} />
          Filtering: Quickly find the contacts you need by filtering them based
          on name or phone number. Our intuitive filtering system makes it easy
          to locate specific contacts within your list.
        </li>
        <li className={css.listItem}>
          <MdPersonalInjury className={css.icon} />
          Personal Account: Enjoy a personalized experience with your own
          account. Keep your contacts secure and accessible only to you.
        </li>
        <li className={css.listItem}>
          <FaHandsClapping className={css.icon} />
          Whether you are managing personal or professional contacts, our
          application offers the tools you need to stay organized and connected.
          Start using our app today and simplify the way you manage your
          contacts!
        </li>
      </ul>
    </div>
  );
};
export default Home;
