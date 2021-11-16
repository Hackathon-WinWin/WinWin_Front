import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArtistSignup from '../../components/artist/ArtistSignup';
import { artistSignup } from '../../modules/auth';

const ArtistSignupContainer = () => {
  const { signupSuccess, signupError } = useSelector(({ auth }) => ({
    signupSuccess: auth.signupSuccess,
    signupError: auth.signupError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phoneNumber = '01011112222'; // 이미 있음
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
      console.log('비밀번호 불일치');
      return;
    }
    dispatch(artistSignup({ account, password, phoneNumber }));
  };
  useEffect(() => {
    if (signupSuccess) {
      console.log('Success signup');
      navigate('/');
      return;
    }
    if (signupError) {
      console.log('Error: signup');
      return;
    }
  }, [signupSuccess, signupError, navigate]);
  // useEffect(() => {
  //   // 아이디 양식 확인
  // }, [form.account]);
  return <ArtistSignup form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default ArtistSignupContainer;
