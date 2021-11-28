import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HotelMy from '../../../components/hotel/mypage/HotelMy';
import { checkLoggedIn, initAuth, logout } from '../../../modules/auth';
import {
  addHotelImage,
  getMyHotelProfile,
  getMyHotelProfileImg,
  initProfileImg,
  updateHotelProfileImage,
} from '../../../modules/myPage';

const HotelMyContainer = () => {
  const {
    myHotel,
    hotelProfileImg,
    addHotelImg,
    addHotelImgError,
    logoutSuccess,
  } = useSelector(({ auth, myPage }) => ({
    logoutSuccess: auth.logoutSuccess,
    myHotel: myPage.myHotel,
    hotelProfileImg: myPage.hotelProfileImg,
    addHotelImg: myPage.addHotelImg,
    addHotelImgError: myPage.addHotelImgError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    const {
      target: { name, files },
    } = e;
    const formData = new FormData();
    formData.append(name, files[0]);
    if (name === 'image') {
      dispatch(addHotelImage(formData));
    } else if (name === 'profileImage') {
      dispatch(updateHotelProfileImage(formData));
    }
  };
  const onLogout = () => {
    dispatch(logout());
  };
  // ** 프로필 생성 여부가 선행되어야 함 **
  useEffect(() => {
    dispatch(getMyHotelProfile());
    dispatch(getMyHotelProfileImg());
  }, [dispatch]);
  useEffect(() => {
    if (addHotelImg) {
      dispatch(getMyHotelProfile());
      dispatch(initProfileImg());
    }
  }, [dispatch, addHotelImg]);
  useEffect(() => {
    if (logoutSuccess) {
      navigate('/');
      dispatch(initAuth());
      return;
    }
  }, [dispatch, navigate, logoutSuccess]);
  return (
    <HotelMy
      myHotel={myHotel}
      hotelProfileImg={hotelProfileImg}
      onChange={onChange}
      onLogout={onLogout}
    />
  );
};

export default HotelMyContainer;
