import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createArtistProfile } from '../../../api/profile';
import ArtistProfile from '../../../components/artist/profile/ArtistProfile';
// import { createArtistProfile } from '../../../modules/profile';

const ArtistProfileContainer = () => {
  // const { artistprofileSuccess, artistprofileError } = useSelector(
  //   ({ profile }) => ({
  //     artistprofileSuccess: profile.artistprofileSuccess,
  //     artistprofileError: profile.artistprofileError,
  //   })
  // );
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    nickname: '',
    name: '',
    birthday: new Date().toString(),
    address: '',
    email: '',
    introduceText: '',
  };
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createArtistProfile(form);
      if (response.status === 200) {
        navigate('/main');
      }
    } catch (e) {
      const { status } = e.response;
      switch (status) {
        case 400:
          alert('이미 사용중인 닉네임');
          break;
        case 401:
          alert('이미 사용중인 이메일');
          break;
        case 402:
          alert('소개글 40자 미만');
          break;
        default:
          alert('다시 시도');
          setForm((state) => ({
            ...state,
            nickname: '',
            name: '',
            birthday: new Date().toString(),
            email: '',
          }));
      }
    }
  };
  return <ArtistProfile form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default ArtistProfileContainer;
