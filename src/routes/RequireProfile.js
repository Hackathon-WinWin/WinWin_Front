import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { checkArtistProfile, checkHotelProfile } from '../modules/profile';

const RequireProfile = ({ children, isArtist }) => {
  const { checkArtistProfileSuccess, checkHotelProfileSuccess } = useSelector(
    ({ profile }) => ({
      checkArtistProfileSuccess: profile.checkArtistProfileSuccess, // 아티스트 프로필 존재
      checkHotelProfileSuccess: profile.checkHotelProfileSuccess,
    })
  );
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (isArtist) {
      dispatch(checkArtistProfile());
      return;
    }
    if (isArtist === false) {
      dispatch(checkHotelProfile());
    }
  }, [dispatch, isArtist]);

  if (!checkArtistProfileSuccess && isArtist === true) {
    console.log('아티스트 프로필 설정하기.');
    return <Navigate to='/createArtistProfile' state={{ from: location }} />;
  }
  if (!checkHotelProfileSuccess && isArtist === false) {
    console.log('호텔 프로필 설정하기');
    return <Navigate to='/createHotelProfile' state={{ from: location }} />;
  }
  return children;
};

export default RequireProfile;
