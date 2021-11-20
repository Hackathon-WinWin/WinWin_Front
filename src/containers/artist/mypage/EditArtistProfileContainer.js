import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateArtistProfile } from '../../../api/profile';
import EditArtistProfile from '../../../components/artist/mypage/EditArtistProfile';
import { getMyAritistProfile } from '../../../modules/myPage';

const EditArtistProfileContainer = () => {
  const { myArtist } = useSelector(({ myPage }) => ({
    myArtist: myPage.myArtist,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname, name, birthday, address, email, introduceText } = myArtist;
  const initialState = {
    nickname,
    name,
    birthday,
    address,
    email,
    introduceText,
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
    const res = await updateArtistProfile(form);
    const { status } = res;
    console.log(res);
    if (status === 200) {
      alert('업데이트 성공');
      navigate('/mypage');
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
      return;
    }
  };
  useEffect(() => {
    if (!myArtist) dispatch(getMyAritistProfile());
  }, [myArtist, dispatch]);
  return (
    <EditArtistProfile form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default EditArtistProfileContainer;
