import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu } from '../components/navigation/menu';

const AppRoute = () => {
  return (
    <Routes >
        <Route>
          <Route path='/' element={<Menu />}></Route>
        </Route>
    </Routes>
  );
};

export default AppRoute;