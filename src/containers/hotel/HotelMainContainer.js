import React, { useEffect, useState } from 'react';
import { hotelMainFirstPage } from '../../api/mainPage';
import HotelMain from '../../components/hotel/HotelMain';

const dummyData = [
  {
    artistAuth_id: '619ce01c293e4de24bb2b520',
    nickname: '혁돌몬',
    hashTag: [{ tagName: 'test' }, { tagName: 'test' }],
    portfolio: {
      artistAuth_id: '619ce01c293e4de24bb2b520',
      title: '포트폴리오 제목',
      introduceText: '소개글',
      link: '링크',
      images: [
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/8741637671056770.png',
          _id: '619ce091293e4de24bb2b54a',
        },
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/6351637671056771.png',
          _id: '619ce091293e4de24bb2b54b',
        },
      ],
      _id: '619ce091293e4de24bb2b549',
    },
  },
  {
    artistAuth_id: '619ce01c293e4de24bb2b520',
    nickname: '혁돌몬',
    hashTag: [],
    portfolio: {
      artistAuth_id: '619ce01c293e4de24bb2b520',
      title: '포트폴리오 제목',
      introduceText: '소개글',
      link: '링크',
      images: [
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/8741637671056770.png',
          _id: '619ce091293e4de24bb2b54a',
        },
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/6351637671056771.png',
          _id: '619ce091293e4de24bb2b54b',
        },
      ],
      _id: '619ce091293e4de24bb2b549',
    },
  },
  {
    artistAuth_id: '619ce01c293e4de24bb2b520',
    nickname: '혁돌몬',
    hashTag: [],
    portfolio: {
      artistAuth_id: '619ce01c293e4de24bb2b520',
      title: '포트폴리오 제목',
      introduceText: '소개글',
      link: '링크',
      images: [
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/8741637671056770.png',
          _id: '619ce091293e4de24bb2b54a',
        },
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/6351637671056771.png',
          _id: '619ce091293e4de24bb2b54b',
        },
      ],
      _id: '619ce091293e4de24bb2b549',
    },
  },
  {
    artistAuth_id: '619ce01c293e4de24bb2b520',
    nickname: '혁돌몬',
    hashTag: [],
    portfolio: {
      artistAuth_id: '619ce01c293e4de24bb2b520',
      title: '포트폴리오 제목',
      introduceText: '소개글',
      link: '링크',
      images: [
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/8741637671056770.png',
          _id: '619ce091293e4de24bb2b54a',
        },
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/6351637671056771.png',
          _id: '619ce091293e4de24bb2b54b',
        },
      ],
      _id: '619ce091293e4de24bb2b549',
    },
  },
];
const HotelMainContainer = () => {
  const [artistProfiles, setArtistProfiles] = useState();
  useEffect(() => {
    // const fetchArtistMain = async () => {
    //   try {
    //     const response = await hotelMainFirstPage();
    //     setArtistProfiles(response.data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // fetchArtistMain();
    setArtistProfiles(dummyData);
  }, []);
  return <HotelMain artistProfiles={artistProfiles} />;
};

export default HotelMainContainer;
