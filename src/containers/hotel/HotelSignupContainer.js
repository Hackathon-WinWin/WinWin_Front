import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import HotelSignup from '../../components/hotel/HotelSignup';
import { hotelSignup, initAuth } from '../../modules/auth';

const HotelSignupContainer = () => {
  const { hotelSignupSuccess, hotelSignupError } = useSelector(({ auth }) => ({
    hotelSignupSuccess: auth.hotelSignupSuccess,
    hotelSignupError: auth.hotelSignupError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {
  //   state: { businessNumber, hostName, openDate },
  // } = useLocation();
  const [businessNumber, hostName, openDate] = ['123', '오정진', '2021-11-23'];
  const initialState = {
    account: '',
    password: '',
    passwordConfirm: '',
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
    const { account, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      alert('비밀번호 불일치');
      return;
    }
    dispatch(
      hotelSignup({ account, password, businessNumber, hostName, openDate })
    );
  };
  useEffect(() => {
    if (hotelSignupSuccess) {
      console.log('회원가입 성공');
      navigate('/');
      return;
    }
    if (hotelSignupError) {
      alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
      dispatch(initAuth());
      navigate('/signup');
      return;
    }
  }, [hotelSignupSuccess, hotelSignupError, navigate, dispatch]);

  return <HotelSignup form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default HotelSignupContainer;
