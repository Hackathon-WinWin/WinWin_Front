import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArtistMy from '../../../components/artist/mypage/ArtistMy';
import { initAuth, logout } from '../../../modules/auth';
import {
  getMyAritistProfile,
  getMyArtistBgImg,
  getMyArtistProfileImg,
  updateArtistBackgroundImage,
  updateArtistProfileImage,
} from '../../../modules/myPage';
import {
  addPortfolio,
  initPortfolio,
  readMyPortfolio,
} from '../../../modules/portfolio';

const ArtistMyContainer = () => {
  const {
    logoutSuccess,
    myArtist,
    artistProfileImg,
    artistBackImg,
    success,
    error,
    myPortfolio,
    myPortfolioError,
  } = useSelector(({ auth, myPage, portfolio }) => ({
    logoutSuccess: auth.logoutSuccess,
    myArtist: myPage.myArtist,
    artistProfileImg: myPage.artistProfileImg,
    artistBackImg: myPage.artistBackImg,
    success: portfolio.success,
    error: portfolio.error,
    myPortfolio: portfolio.myPortfolio,
    myPortfolioError: portfolio.myPortfolioError,
  }));
  const initState = {
    title: '',
    introduceText: '',
    link: '',
    images: [],
  };
  const [form, setForm] = useState(initState);
  const [openDetail, setOpenDetail] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    const {
      target: { name, value, files },
    } = e;
    setForm((state) => ({
      ...state,
      [name]: name === 'images' ? [...files] : value,
    }));
  };
  const onChangeFile = (e) => {
    const {
      target: { name, files },
    } = e;
    const formData = new FormData();
    formData.append(name, files[0]);
    if (name === 'profileImage') {
      dispatch(updateArtistProfileImage(formData));
    } else if (name === 'backgroundImage') {
      dispatch(updateArtistBackgroundImage(formData));
    }
  };
  const onAddPortfolio = (e) => {
    e.preventDefault();
    if (form.images.length === 0) {
      alert('사진을 추가해주세요.');
      return;
    }
    const formData = new FormData();
    console.log(form.images);
    form.images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('title', form.title);
    formData.append('introduceText', form.introduceText);
    formData.append('link', form.link);
    dispatch(addPortfolio(formData));
  };
  const onLogout = () => {
    dispatch(logout());
  };
  // ** 프로필 생성 여부가 선행되어야 함 **
  useEffect(() => {
    dispatch(getMyAritistProfile());
    dispatch(getMyArtistProfileImg());
    dispatch(getMyArtistBgImg());
    dispatch(readMyPortfolio());
  }, [dispatch]);
  useEffect(() => {
    if (success) {
      setOpenDetail(false);
      dispatch(initPortfolio());
      dispatch(readMyPortfolio());
    }
  }, [success, dispatch]);
  useEffect(() => {
    if (myPortfolioError) {
      console.log('myPortfolioError');
    }
  }, [myPortfolio, myPortfolioError]);
  useEffect(() => {
    if (logoutSuccess) {
      navigate('/');
      return () => {
        dispatch(initAuth());
      };
    }
  }, [dispatch, navigate, logoutSuccess]);
  return (
    <ArtistMy
      form={form}
      openDetail={openDetail}
      setOpenDetail={setOpenDetail}
      setForm={setForm}
      myArtist={myArtist}
      artistProfileImg={artistProfileImg}
      artistBackImg={artistBackImg}
      myPortfolio={myPortfolio}
      onChange={onChange}
      onChangeFile={onChangeFile}
      onAddPortfolio={onAddPortfolio}
      onLogout={onLogout}
    />
  );
};

export default ArtistMyContainer;
