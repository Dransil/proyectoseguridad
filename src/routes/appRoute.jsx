import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MenuPrincipal } from '../components/navigation/menu';

const AppRoute = () => {
  return (
    <Routes >
        <Route>
          <Route path='/' element={<MenuPrincipal />}></Route>
        </Route>
    </Routes>
  );
};

export default AppRoute;