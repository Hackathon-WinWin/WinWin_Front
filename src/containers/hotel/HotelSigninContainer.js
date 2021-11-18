import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HotelSignin from '../../components/hotel/HotelSignin';
import { checkLoggedIn, hotelSignin } from '../../modules/auth';

const HotelSigninContainer = () => {
  const { hotelSigninSuccess, hotelSigninError } = useSelector(({ auth }) => ({
    hotelSigninSuccess: auth.hotelSigninSuccess,
    hotelSigninError: auth.hotelSigninError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    account: '',
    password: '',
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
    dispatch(hotelSignin(form));
  };
  useEffect(() => {
    if (hotelSigninSuccess) {
      console.log('success login');
      navigate('/');
      return () => {
        dispatch(checkLoggedIn());
      };
    }
    if (hotelSigninError) {
      console.log('Error: login');
      return;
    }
  }, [hotelSigninSuccess, hotelSigninError, navigate, dispatch]);
  return <HotelSignin form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default HotelSigninContainer;
