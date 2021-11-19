import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createHotelProfile } from '../../../api/profile';
import HotelProfile from '../../../components/hotel/profile/HotelProfile';
// import { createHotelProfile } from '../../../modules/profile';

const HotelProfileContainer = () => {
  const { hotelprofileSuccess, hotelprofileError } = useSelector(
    ({ profile }) => ({
      hotelprofileSuccess: profile.hotelprofileSuccess,
      hotelprofileError: profile.hotelprofileError,
    })
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    hotelName: '',
    address: '서울시 노원구 공릉동 41마길 7',
    phoneNumber: '',
    email: '',
    introduceText: '',
  };
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { hotelName, address, phoneNumber, email } = form;
    if (
      hotelName === '' ||
      address === '' ||
      phoneNumber === '' ||
      email === ''
    ) {
      alert('소개란을 제외한 양식을 체워주세요.');
      return;
    }
    dispatch(createHotelProfile(form));
  };
  useEffect(() => {
    if (hotelprofileSuccess) {
      navigate('/main');
      return;
    }
    if (hotelprofileError) {
      alert('다시 시도해주세요.');
      setForm((state) => ({
        ...state,
        hotelName: '',
        address: '서울시 노원구 공릉동 41마길 7',
        phoneNumber: '',
        email: '',
        introduceText: '',
      }));
      return;
    }
  }, [hotelprofileSuccess, hotelprofileError, navigate]);
  return <HotelProfile form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default HotelProfileContainer;
