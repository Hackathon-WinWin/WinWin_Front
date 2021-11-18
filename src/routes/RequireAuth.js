import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { checkLoggedIn } from '../modules/auth';

const RequireAuth = ({ children }) => {
  const { check } = useSelector(({ auth }) => ({ check: auth.check }));
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);
  if (!check) {
    alert('로그인을 하세요.');
    return <Navigate to='/signin' state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
