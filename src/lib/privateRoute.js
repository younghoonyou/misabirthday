import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  // const token =
  //   localStorage.getItem('token') || sessionStorage.getItem('token');
  // return token ? <Outlet /> : <Navigate to='/' />;
  return <Navigate to='/' />;
};

export default PrivateRoute;
