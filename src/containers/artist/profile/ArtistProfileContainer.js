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
    dispatch(createArtistProfile(form));
  };
  useEffect(() => {
    if (artistprofileSuccess) {
      navigate('/main');
      return;
    }
    if (artistprofileError) {
      alert('다시 기입해주세요.');
      setForm((state) => ({
        ...state,
        nickname: '',
        name: '',
        birthday: new Date().toString(),
        email: '',
      }));
      return;
    }
  }, [artistprofileSuccess, artistprofileError, navigate]);

  return <ArtistProfile form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default ArtistProfileContainer;
