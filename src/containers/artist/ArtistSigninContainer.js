import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArtistSignin from '../../components/artist/ArtistSignin';
import { artistLogout, artistSignin, checkLoggedIn } from '../../modules/auth';

const ArtistSigninContainer = () => {
  const { artistSigninSuccess, artistSigninError } = useSelector(
    ({ auth }) => ({
      artistSigninSuccess: auth.artistSigninSuccess,
      artistSigninError: auth.artistSigninError,
    })
  );
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
    dispatch(artistSignin(form));
  };
  const onLogout = (e) => {
    dispatch(artistLogout());
  };
  useEffect(() => {
    if (artistSigninSuccess) {
      console.log('success login');
      navigate('/');
      return () => {
        dispatch(checkLoggedIn());
      };
    }
    if (artistSigninError) {
      console.log('Error: login');
      return;
    }
  }, [artistSigninSuccess, artistSigninError, navigate, dispatch]);

  return (
    <ArtistSignin
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      onLogout={onLogout}
    />
  );
};

export default ArtistSigninContainer;
