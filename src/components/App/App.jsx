// import css from './App.module.css';

import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Registration from '../../pages/Registration/Registration';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Contacts from '../../pages/Contacts/Contacts';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={<RestrictedRoute component={<Registration />} />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={<Login />} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute component={<Contacts />} />}
              />
            </Routes>
          </Suspense>
        </>
      )}
    </Layout>
  );
};

export default App;

// Додавати новий контакт
// Видаляти контакт
// Змінити значення фільтру контактів

// Стор заміна useState
// При екшн - діспат екшн, відправтии в стор, обробити редюсером

// 1. Оголосити стор - один раз в App
// 2. Оголосити стан
// 3. Використати стан в jsx
// 4. Оголосити екшн
// 5. Відправити екшн при події
// 6. Обробити екшн в редюсері
