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
    const response = await createArtistProfile(form);
    const { status } = response;
    console.log(response);
    if (status === 200) {
      navigate('/main', { replace: true });
    } else if (status === 400) {
      alert('이미 사용중인 닉네임');
      return;
    } else if (status === 401) {
      alert('이미 사용중인 이메일');
      return;
    } else if (status === 402) {
      alert('소개글 40자 미만');
      return;
    } else {
      alert('다시 시도');
      setForm((state) => ({
        ...state,
        nickname: '',
        name: '',
        birthday: new Date().toString(),
        email: '',
      }));
      return;
    }
    // dispatch(createArtistProfile(form));
  };
  // useEffect(() => {
  //   if (artistprofileSuccess) {
  //     navigate('/main');
  //     return;
  //   }
  //   if (artistprofileError) {
  //     alert('다시 기입해주세요.');
  //     setForm((state) => ({
  //       ...state,
  //       nickname: '',
  //       name: '',
  //       birthday: new Date().toString(),
  //       email: '',
  //     }));
  //     return;
  //   }
  // }, [artistprofileSuccess, artistprofileError, navigate]);

  return <ArtistProfile form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default ArtistProfileContainer;
