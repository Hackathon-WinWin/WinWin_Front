import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArtistProfile from '../../../components/artist/profile/ArtistProfile';
import { createArtistProfile } from '../../../modules/profile';

const ArtistProfileContainer = () => {
  const { artistprofileSuccess, artistprofileError } = useSelector(
    ({ profile }) => ({
      artistprofileSuccess: profile.artistprofileSuccess,
      artistprofileError: profile.artistprofileError,
    })
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    nickname: '',
    name: '',
    birthday: new Date().toString(),
    email: '',
  };
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(typeof form.birthday);
    dispatch(createArtistProfile(form));
  };
  useEffect(() => {
    if (artistprofileSuccess) {
      console.log('Success artistprofile');
      navigate('/');
      return;
    }
    if (artistprofileError) {
      console.log('Error: artistprofile');
      return;
    }
  }, [artistprofileSuccess, artistprofileError, navigate]);

  return <ArtistProfile form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default ArtistProfileContainer;
