import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readOtherPortfolio } from '../../api/portfolio';
import { specificArtistProfile } from '../../api/profile';
import OtherProfile from '../../components/hotel/OtherProfile';

// GET specificArtistProfile
const dummyOtherProfile = {
  profileImageURL:
    'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  backgroundImageURL:
    'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  profile: {
    _id: '619c976bc12d23e494730d85',
    artistAuth_id: '619c96a0a5f1fece6e970d92',
    nickname: '혁돌몬2',
    name: '공혁준',
    birthday: '1998-02-05T00:00:00.000Z',
    address: '서울시 중구 신당동',
    phoneNumber: '01079998559',
    email: 'orijoon98@gmail.com2',
    introduceText: '저는 진아가 좋아요',
    hashTag: [],
    __v: 0,
  },
};

// GET readOtherPortfolio
const dummyOtherPort = {
  _id: '619c976bc12d23e494730d8b',
  artistAuth_id: '619c96a0a5f1fece6e970d92',
  portfolios: [
    {
      artistAuth_id: '619c96a0a5f1fece6e970d92',
      title: '포트폴리오 제목',
      introduceText: '소개글',
      link: '링크',
      images: [
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/9381637652340067.png',
          _id: '619c9774c12d23e494730d93',
        },
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/791637652340072.png',
          _id: '619c9774c12d23e494730d94',
        },
      ],
      _id: '619c9774c12d23e494730d92',
    },
  ],
  __v: 0,
};

const OtherProfileContainer = () => {
  const { artistAuth_id } = useParams();
  const [otherProfile, setOtherProfile] = useState();
  const [otherPortfolio, setOtherPortfolio] = useState();
  useEffect(() => {
    // const fetchOtherProfile = async () => {
    //   try {
    //     const response = await specificArtistProfile(artistAuth_id);
    //     setOtherProfile(response.data);
    //   } catch (e) {}
    // };
    // fetchOtherProfile();
    setOtherProfile(dummyOtherProfile);
  }, []);
  useEffect(() => {
    // const fetchOtherPortfolio = async () => {
    //   try {
    //     const response = await readOtherPortfolio(artistAuth_id);
    //     setOtherPortfolio(response.data);
    //   } catch (e) {}
    // };
    // fetchOtherPortfolio();
    setOtherPortfolio(dummyOtherPort);
  }, []);
  return (
    <OtherProfile otherProfile={otherProfile} otherPortfolio={otherPortfolio} />
  );
};

export default OtherProfileContainer;
