import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HotelSignup from '../../components/hotel/HotelSignup';
import { hotelSignup } from '../../modules/auth';

const HotelSignupContainer = () => {
  const { hotelSignupSuccess, hotelSignupError } = useSelector(({ auth }) => ({
    hotelSignupSuccess: auth.hotelSignupSuccess,
    hotelSignupError: auth.hotelSignupError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    account: '',
    password: '',
    passwordConfirm: '',
    hostName: '',
    openDate: new Date(),
  };
  const [form, setForm] = useState(initialState);
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const businessNumber = '123123123'; // 임시
    const { account, password, passwordConfirm, hostName, openDate } = form;
    if (password !== passwordConfirm) alert('비밀번호 불일치');
    dispatch(
      hotelSignup({ account, password, hostName, openDate, businessNumber })
    );
  };
  useEffect(() => {
    if (hotelSignupSuccess) {
      console.log('회원가입 성공');
      navigate('/');
      return;
    }
    if (hotelSignupError) {
      alert('회원가입실패');
      return;
    }
  }, [hotelSignupSuccess, hotelSignupError, navigate]);

  return <HotelSignup form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default HotelSignupContainer;
