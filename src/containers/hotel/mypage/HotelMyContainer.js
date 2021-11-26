import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HotelMy from '../../../components/hotel/mypage/HotelMy';
import {
  addHotelImage,
  getMyHotelProfile,
  getMyHotelProfileImg,
  updateHotelProfileImage,
} from '../../../modules/myPage';

const HotelMyContainer = () => {
  const { myHotel, hotelProfileImg, addHotelImg, addHotelImgError } =
    useSelector(({ myPage }) => ({
      myHotel: myPage.myHotel,
      hotelProfileImg: myPage.hotelProfileImg,
      addHotelImg: myPage.addHotelImg,
      addHotelImgError: myPage.addHotelImgError,
    }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const {
      target: { name, files },
    } = e;
    const formData = new FormData();
    formData.append(name, files[0]);
    if (name === 'image') {
      dispatch(addHotelImage(formData));
    } else if (name === 'profileImage') {
      console.log(formData);
      dispatch(updateHotelProfileImage(formData));
    }
  };

  // ** 프로필 생성 여부가 선행되어야 함 **
  useEffect(() => {
    dispatch(getMyHotelProfile());
    dispatch(getMyHotelProfileImg());
  }, [dispatch]);
  useEffect(() => {
    if (addHotelImg) {
      dispatch(getMyHotelProfile());
    }
  }, [dispatch, addHotelImg]);

  return (
    <HotelMy
      myHotel={myHotel}
      hotelProfileImg={hotelProfileImg}
      onChange={onChange}
    />
  );
};

export default HotelMyContainer;
