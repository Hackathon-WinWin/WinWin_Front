import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { artistSignup, checkAccount } from '../../api/auth';
import ArtistSignup from '../../components/artist/ArtistSignup';
import { checkLoggedIn, initAuth } from '../../modules/auth';

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
  const [checkPassword, setCheckPassword] = useState({
    formError: false,
    formMessage: '',
  });
  const [error, setError] = useState({ isError: true, message: '' });

  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;

    if (name === 'password' && form.passwordConfirm !== '') {
      setCheckPassword((state) => ({
        ...state,
        formError: false,
        formMessage: '',
      }));
      if (value !== '') {
        if (form.passwordConfirm === value)
          setCheckPassword((state) => ({
            ...state,
            formError: true,
            formMessage: '비밀번호가 일치합니다.',
          }));
        else
          setCheckPassword((state) => ({
            ...state,
            formError: false,
            formMessage: '비밀번호가 일치하지 않습니다.',
          }));
      }
    }
    if (name === 'passwordConfirm') {
      setCheckPassword((state) => ({
        ...state,
        formError: false,
        formMessage: '',
      }));
      if (value !== '') {
        if (form.password === value)
          setCheckPassword((state) => ({
            ...state,
            formError: true,
            formMessage: '비밀번호가 일치합니다.',
          }));
        else
          setCheckPassword((state) => ({
            ...state,
            formError: false,
            formMessage: '비밀번호가 일치하지 않습니다.',
          }));
      }
    }
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { account, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    try {
      const res = await artistSignup({
        account,
        password,
        phoneNumber,
      });
      if (res.status === 200) {
        const firebaseToken = localStorage.getItem('firebase_token');
        dispatch(checkLoggedIn(firebaseToken));
        navigate('/');
      }
    } catch (e) {
      dispatch(initAuth());
      const { status } = e.response;
      switch (status) {
        case 400:
          alert('이미 가입한 전화번호 입니다.');
          navigate('/signup');
          break;
        default:
          alert('다시 시도해주세요.');
          setForm((state) => ({
            ...state,
            account: '',
            password: '',
            passwordConfirm: '',
          }));
      }
    }
  };
  const onCheckAccount = async (e) => {
    if (e.target.value === '') {
      setError((state) => ({
        ...state,
        isError: false,
        message: '',
      }));
      return;
    }

    try {
      const res = await checkAccount(form.account);
      if (res.status === 200) {
        setError((state) => ({
          ...state,
          isError: false,
          message: '사용 가능합니다!',
        }));
      }
    } catch (e) {
      const { status } = e.response;
      setError((state) => ({ ...state, isError: true }));
      switch (status) {
        case 400:
          setError((state) => ({
            ...state,
            message: '아이디는 8글자 이상 빈칸없이 영문과 숫자만 가능합니다.',
          }));
          break;
        case 401:
          setError((state) => ({ ...state, message: '아이디 중복입니다.' }));
          break;
        default:
          alert('다시 시도해주세요.');
          setError((state) => ({
            ...state,
            isError: true,
            message: '',
          }));
          setCheckPassword({
            formError: false,
            formMessage: '',
          });
          setError({ isError: true, message: '' });
      }
    }
  };
  return (
    <ArtistSignup
      checkPassword={checkPassword}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      onCheckAccount={onCheckAccount}
      error={error}
    />
  );
};

export default ArtistSignupContainer;
