import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createHotelProfile } from '../../../api/profile';
import HotelProfile from '../../../components/hotel/profile/HotelProfile';
import { checkLoggedIn } from '../../../modules/auth';

const HotelProfileContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    hotelName: '',
    address: '서울시 노원구 공릉동 41마길 7',
    phoneNumber: '',
    email: '',
    introduceText: '',
  };
  const initError = {
    isDupPhone: false,
    isDupEmail: false,
  };
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(initError);
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = async (e) => {
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
    try {
      const response = await createHotelProfile(form);
      if (response.status === 200) {
        const firebaseToken = localStorage.getItem('firebase_token');
        setError((state) => ({
          ...state,
          isDupEmail: false,
          isDupPhone: false,
        }));
        dispatch(checkLoggedIn(firebaseToken));
        navigate('/main');
      }
    } catch (e) {
      const { status } = e.response;
      switch (status) {
        case 400:
          setError((state) => ({ ...state, isDupPhone: true }));
          // alert('이미 사용중인 전화번호');
          break;
        case 401:
          setError((state) => ({ ...state, isDupEmail: true }));
          // alert('이미 사용중인 이메일');
          break;
        default:
          setError((state) => ({
            ...state,
            isDupEmail: false,
            isDupPhone: false,
          }));
          alert('다시 시도');
          setForm((state) => ({
            ...state,
            nickname: '',
            name: '',
            birthday: new Date().toString(),
            email: '',
          }));
      }
    }
  };
  return (
    <HotelProfile
      form={form}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default HotelProfileContainer;
