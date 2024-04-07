// import css from './App.module.css';

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Registration from '../../pages/Registration/Registration';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Contacts from '../../pages/Contacts/Contacts';
import AppBar from '../AppBar/AppBar';

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </>
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
