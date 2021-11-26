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
  const [form, setForm] = useState(initialState);
  const [dupPhone, setDupPhone] = useState({
    isDupPhone: true,
    phoneMessage: '',
  });
  const [dupEmail, setDupEmail] = useState({
    isDupEmail: true,
    emailMessage: '',
  });
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
      alert('소개란을 제외한 양식을 채워주세요.');
      return;
    }
    try {
      const response = await createHotelProfile(form);
      if (response.status === 200) {
        const firebaseToken = localStorage.getItem('firebase_token');
        setDupPhone((state) => ({
          ...state,
          isDupPhone: false,
          phoneMessage: '사용가능합니다.',
        }));
        setDupEmail((state) => ({
          ...state,
          isDupEmail: false,
          emailMessage: '사용가능합니다.',
        }));
        dispatch(checkLoggedIn(firebaseToken));
        navigate('/main');
      }
    } catch (e) {
      const { status } = e.response;
      switch (status) {
        case 400:
          setDupPhone((state) => ({
            ...state,
            isDupPhone: true,
            phoneMessage: '이미 존재하는 휴대폰 번호입니다!',
          }));
          break;
        case 401:
          setDupEmail((state) => ({
            ...state,
            isDupEmail: true,
            emailMessage: '이미 존재하는 이메일 입니다!',
          }));
          break;
        default:
          alert('다시 시도해주세요.');
          setDupPhone((state) => ({
            ...state,
            isDupPhone: true,
            phoneMessage: '',
          }));
          setDupEmail((state) => ({
            ...state,
            isDupEmail: true,
            emailMessage: '',
          }));
          setForm((state) => ({
            ...state,
            hotelName: '',
            address: '서울시 노원구 공릉동 41마길 7',
            phoneNumber: '',
            email: '',
            introduceText: '',
          }));
      }
    }
  };
  return (
    <HotelProfile
      form={form}
      dupPhone={dupPhone}
      dupEmail={dupEmail}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default HotelProfileContainer;
