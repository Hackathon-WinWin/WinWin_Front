import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ArtistSignup from '../../components/artist/ArtistSignup';
import { artistSignup, initAuth } from '../../modules/auth';

const ArtistSignupContainer = () => {
  const { artistSignupSuccess, artistSignupError } = useSelector(
    ({ auth }) => ({
      artistSignupSuccess: auth.artistSignupSuccess,
      artistSignupError: auth.artistSignupError,
    })
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    state: { phoneNumber },
  } = useLocation();
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
    if (artistSignupSuccess) {
      console.log('Success signup');
      navigate('/');
      return;
    }
    if (artistSignupError) {
      alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
      dispatch(initAuth());
      navigate('/signup');
      return;
    }
  }, [artistSignupSuccess, artistSignupError, navigate, dispatch]);
  // useEffect(() => {
  //   // 아이디 양식 확인 로직
  // }, [form.account]);
  return <ArtistSignup form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default ArtistSignupContainer;
