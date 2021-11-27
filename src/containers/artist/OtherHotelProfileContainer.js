import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { specificHotelProfile } from '../../api/profile';
import OtherHotelProfile from '../../components/artist/OtherHotelProfile';

const hotelprofile = {
  profileImageURL:
    'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF_%E1%84%83%E1%85%A2%E1%84%91%E1%85%AD.png',
  bookMarked: false,
  profile: {
    _id: '619f37b2a2015fba009cc428',
    hotelAuth_id: '619f379da2015fba009cc421',
    hotelName: '서울 호텔',
    address: '서울시 강남구 대치동',
    phoneNumber: '02-1234-567832',
    email: 'orijoon98@seoulhotel.com32',
    introduceText: '안녕하세요 서울 호텔입니다.',
    bookMark: 10,
    images: [],
    __v: 0,
  },
};
const OtherHotelProfileContainer = () => {
  const { hotelAuth_id } = useParams();
  const [otherHotelProfile, setOtherHoterProfile] = useState();
  useEffect(() => {
    // const fetchOtherHotelProfile = async () => {
    //   try {
    //     const response = await specificHotelProfile(hotelAuth_id);
    //     setOtherHoterProfile(response.data);
    //   } catch (e) {}
    // };
    // if (hotelAuth_id) fetchOtherHotelProfile();
    if (hotelAuth_id) setOtherHoterProfile(hotelprofile);
  }, [hotelAuth_id]);

  return <OtherHotelProfile otherHotelProfile={otherHotelProfile} />;
};

export default OtherHotelProfileContainer;
