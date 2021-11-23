import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ArtistMy from '../../../components/artist/mypage/ArtistMy';
import {
  getMyAritistProfile,
  getMyArtistBgImg,
  getMyArtistProfileImg,
} from '../../../modules/myPage';
import { addPortfolio, readMyPortfolio } from '../../../modules/portfolio';

const ArtistMyContainer = () => {
  const {
    myArtist,
    artistProfileImg,
    artistBackImg,
    myPortfolio,
    myPortfolioError,
  } = useSelector(({ myPage, portfolio }) => ({
    myArtist: myPage.myArtist,
    artistProfileImg: myPage.artistProfileImg,
    artistBackImg: myPage.artistBackImg,
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
  const dispatch = useDispatch();
  const onChange = (e) => {
    const {
      target: { name, value, files },
    } = e;
    setForm((state) => ({
      ...state,
      [name]: name === 'images' ? [...files] : value,
    }));
  };
  const onAddPortfolio = (e) => {
    e.preventDefault();
    if (form.images === []) {
      alert('사진을 추가해주세요.');
      return;
    }
    const formData = new FormData();
    form.images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('title', form.title);
    formData.append('introduceText', form.introduceText);
    formData.append('link', form.link);
    dispatch(addPortfolio(formData));
  };
  // jwt 발급 오류로 안됨
  // useEffect(() => {
  //   dispatch(getMyAritistProfile());
  //   dispatch(getMyArtistProfileImg());
  //   dispatch(getMyArtistBgImg());
  //   dispatch(readMyPortfolio());
  // }, [dispatch]);
  useEffect(() => {
    if (myPortfolioError) {
      console.log('myPortfolioError');
    }
  }, [myPortfolioError]);
  return (
    <ArtistMy
      form={form}
      setForm={setForm}
      myArtist={myArtist}
      artistProfileImg={artistProfileImg}
      artistBackImg={artistBackImg}
      myPortfolio={myPortfolio}
      onChange={onChange}
      onAddPortfolio={onAddPortfolio}
    />
  );
};

export default ArtistMyContainer;
