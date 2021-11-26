import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Entry from '../../components/common/Entry';
import { checkLoggedIn, initAuth, signin } from '../../modules/auth';

const EntryContainer = () => {
  const { signinSuccess, signinError } = useSelector(({ auth }) => ({
    signinSuccess: auth.signinSuccess,
    signinError: auth.signinError,
  }));
  const [firebaseToken, setFirebaseToken] = useState();
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
    if (form.account === '' || form.password === '') {
      alert('양식을 입력해주세요');
      return;
    }
    dispatch(signin(form));
  };
  useEffect(() => {
    const getFirebaseToken = () => {
      try {
        const token = localStorage.getItem('firebase_token');
        setFirebaseToken(token);
      } catch (e) {}
    };
    getFirebaseToken();
  }, []);
  useEffect(() => {
    if (signinSuccess) {
      dispatch(checkLoggedIn(firebaseToken));
      navigate('/main');
    }
    if (signinError) {
      alert('다시 시도해주세요.');
      setForm({ account: '', password: '' });
      dispatch(initAuth());
    }
  }, [signinSuccess, signinError, navigate, dispatch, firebaseToken]);
  return <Entry form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default EntryContainer;
