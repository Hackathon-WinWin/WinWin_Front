import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addHotelImage, updateHotelProfileImage } from '../../../api/myPage';
import HotelMy from '../../../components/hotel/mypage/HotelMy';
import {
  getMyHotelProfile,
  getMyHotelProfileImg,
} from '../../../modules/myPage';

const HotelMyContainer = () => {
  const { myHotel, hotelProfileImg } = useSelector(({ myPage }) => ({
    myHotel: myPage.myHotel,
    hotelProfileImg: myPage.hotelProfileImg,
  }));
  const initState = {
    profileImage: null,
    image: null,
  };
  const [form, setForm] = useState(initState);
  const dispatch = useDispatch();
  const onChange = (e) => {
    const {
      target: { name, files },
    } = e;
    console.log(files);
    setForm((state) => ({ ...state, [name]: files[0] }));
  };
  const onAddHotelImage = async (e) => {
    const formData = new FormData();
    formData.append('image', form.image);
    e.preventDafault();
    try {
      await addHotelImage(formData);
    } catch (e) {}
  };
  const onUpdateHotelProfileImg = async (e) => {
    const formData = new FormData();
    formData.append('profileImage', form.profileImage);
    e.preventDafault();
    try {
      await updateHotelProfileImage(formData);
    } catch (e) {}
  };
  // 서버와 연동시 주석 해제
  // useEffect(() => {
  //   dispatch(getMyHotelProfile());
  //   dispatch(getMyHotelProfileImg());
  // }, [dispatch]);
  return (
    <HotelMy
      myHotel={myHotel}
      hotelProfileImg={hotelProfileImg}
      onChange={onChange}
      onUpdateHotelProfileImg={onUpdateHotelProfileImg}
      onAddHotelImage={onAddHotelImage}
    />
  );
};

export default HotelMyContainer;
