import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { checkLoggedIn } from '../modules/auth';

const RequireAuth = ({ Component, match }) => {
  const { check, checkError } = useSelector(({ auth }) => ({
    check: auth.check,
    checkError: auth.checkError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);
  useEffect(() => {
    if (checkError) {
      alert('로그인을 해주세요.');
      navigate('/');
    }
  }, [checkError, navigate]);
  if (!check) return null;
  return <Component match={match} />;
};

export default RequireAuth;
