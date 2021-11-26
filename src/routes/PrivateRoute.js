import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkLoggedIn } from '../modules/auth';

const PrivateRoute = ({ children }) => {
  const { check } = useSelector(({ auth }) => ({ check: auth.check }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);

  if (!check) return <Navigate to='/' />;
  console.log('로그인 상태임');
  if (!check.hasProfile) {
    console.log('프로필 없음');
    if (check.isArtist) {
      console.log('아티스트 프로필 없음');
      return <Navigate to='/createArtistProfile' />;
    }
    console.log('호텔 프로필 없음');
    return <Navigate to='/createHotelProfile' />;
  }
  console.log('로그인 상태이고 프로필 있음', check);
  return children;
};

export default PrivateRoute;
