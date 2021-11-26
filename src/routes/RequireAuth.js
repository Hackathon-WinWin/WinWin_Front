import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkLoggedIn } from '../modules/auth';

const RequireProfile = ({
  isArtist,
  hasProfile,
  ArtistComponent,
  HotelComponent,
}) => {
  if (!hasProfile) {
    if (isArtist) return <Navigate to='/createArtistProfile' replace />;
    return <Navigate to='/createHotelProfile' replace />;
  }
  return isArtist ? <ArtistComponent /> : <HotelComponent />;
};

const RequireAuth = ({ firebaseToken, ArtistComponent, HotelComponent }) => {
  const { check } = useSelector(({ auth }) => ({
    check: auth.check,
  }));
  // check: {isArtist, hasProfile}
  const dispatch = useDispatch();
  useEffect(() => {
    // if (firebaseToken) dispatch(checkLoggedIn(firebaseToken));
  }, [dispatch, firebaseToken]);
  // 로그인 실패 혹은 안함
  if (!check) {
    return <Navigate to='/' replace />;
  }
  // 로그인 성공
  return (
    <RequireProfile
      isArtist={check.isArtist}
      hasProfile={check.hasProfile}
      ArtistComponent={ArtistComponent}
      HotelComponent={HotelComponent}
    />
  );
};

export default RequireAuth;
