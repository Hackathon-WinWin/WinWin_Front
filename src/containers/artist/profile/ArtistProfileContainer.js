import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createArtistProfile } from '../../../api/profile';
import ArtistProfile from '../../../components/artist/profile/ArtistProfile';
import { checkLoggedIn } from '../../../modules/auth';

const ArtistProfileContainer = () => {
  const dispatch = useDispatch();
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
  const [dupNickname, setDupNickname] = useState({
    isDupNickname: true,
    nicknameMessage: '',
  });
  const [dupEmail, setDupEmail] = useState({
    isDupEmail: true,
    emailMessage: '',
  });

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
        const firebaseToken = localStorage.getItem('firebase_token');
        setDupNickname((state) => ({
          ...state,
          isDupNickname: false,
          nicknameMessage: '사용가능합니다.',
        }));
        setDupEmail((state) => ({
          ...state,
          isDupEmail: false,
          emailMessage: '사용가능합니다.',
        }));
        dispatch(checkLoggedIn(firebaseToken));
        navigate('/main');
      }
    } catch (e) {
      const { status } = e.response;
      switch (status) {
        case 400:
          setDupNickname((state) => ({
            ...state,
            isDupNickname: true,
            nicknameMessage: '이미 사용중인 닉네임입니다.',
          }));
          break;
        case 401:
          setDupEmail((state) => ({
            ...state,
            isDupEmail: false,
            emailMessage: '이미 존재하는 이메일입니다.',
          }));
          break;
        case 402:
          alert('소개글 40자 미만');
          break;
        default:
          alert('다시 시도해주세요.');
          setForm((state) => ({
            ...state,
            nickname: '',
            name: '',
            birthday: new Date().toString(),
            address: '',
            email: '',
            introduceText: '',
          }));
          setDupNickname((state) => ({
            ...state,
            isDupNickname: true,
            nicknameMessage: '',
          }));
          setDupEmail((state) => ({
            ...state,
            isDupEmail: true,
            emailMessage: '',
          }));
      }
    }
  };
  return (
    <ArtistProfile
      form={form}
      dupNickname={dupNickname}
      dupEmail={dupEmail}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default ArtistProfileContainer;
