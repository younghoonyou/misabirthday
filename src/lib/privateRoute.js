import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const obj = JSON.parse(token);
    if (obj.value === true && obj.expire > Date.now()) {
      return <Outlet />;
    } else {
      return <Navigate to='/' />;
    }
  }
  return <Navigate to='/' />;
  // return token ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
