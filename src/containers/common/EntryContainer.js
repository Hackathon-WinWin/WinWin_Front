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
    if (signinSuccess) {
      console.log('success login');
      navigate('/main');
      dispatch(checkLoggedIn());
      return;
    }
    if (signinError) {
      alert('다시 시도해주세요.');
      setForm({ account: '', password: '' });
      dispatch(initAuth());
      return;
    }
  }, [signinSuccess, signinError, navigate, dispatch]);
  return <Entry form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default EntryContainer;
