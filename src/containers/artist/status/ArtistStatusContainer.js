import React, { useState } from 'react';
import { useEffect } from 'react';
import { getArtistStatus } from '../../../api/match';
import ArtistStatus from '../../../components/artist/status/ArtistStatus';
import ArtistSendStatus from '../../../components/artist/status/ArtistSendStatus';

const dummy = {
  _id: '619c976bc12d23e494730d8f',
  artistAuth_id: '619c96a0a5f1fece6e970d92',
  sent: [
    {
      application_id: '619c97adc12d23e494730dab',
      recruitment_id: '619c964ba5f1fece6e970d7d',
      hotelName: '서울 호텔',
      recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
      checked: true,
      checkedDate: '2021-02-05T00:00:00.000Z',
      _id: '619c97adc12d23e494730dae',
    },
    {
      application_id: '619c9867d27f5f72360fa15f',
      recruitment_id: '619c964ba5f1fece6e970d7d',
      hotelName: '서울 호텔',
      recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
      checked: true,
      checkedDate: '2021-02-05T00:00:00.000Z',
      _id: '619c9867d27f5f72360fa162',
    },
    {
      application_id: '619ed520e3bcd7df90df9efc',
      recruitment_id: '619c964ba5f1fece6e970d7d',
      hotelName: '서울 호텔',
      recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
      checked: false,
      _id: '619ed520e3bcd7df90df9eff',
    },
    {
      application_id: '619ed528e3bcd7df90df9f0e',
      recruitment_id: '619c964ba5f1fece6e970d7d',
      hotelName: '서울 호텔',
      recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
      checked: false,
      _id: '619ed528e3bcd7df90df9f11',
    },
    {
      application_id: '619ed540e3bcd7df90df9f28',
      recruitment_id: '619c964ba5f1fece6e970d7d',
      hotelName: '서울 호텔',
      recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
      checked: false,
      _id: '619ed540e3bcd7df90df9f2b',
    },
  ],
  recieved: [
    {
      application_id: '619f0f7f58ab59229b6807ec',
      message: '여기에 작품 걸어',
      phoneNumber: '010-7999-8559',
      email: 'hotel@hotel.com',
      title: '야아아아아',
      writtenTime: '2021-11-25T04:22:23.084Z',
      _id: '619f0f7f58ab59229b6807f7',
    },
    {
      application_id: '619f0f9358ab59229b680811',
      message: '여기에 작품 걸어',
      phoneNumber: '010-7999-8559',
      email: 'hotel@hotel.com',
      title: '야아아아아',
      writtenTime: '2021-11-25T04:22:43.869Z',
      _id: '619f0f9358ab59229b68081d',
    },
  ],
  __v: 0,
};
const ArtistSendStatusContainer = () => {
  const [artistStatus, setArtistStatus] = useState();
  useEffect(() => {
    // const fetchArtistStatus = async () => {
    //   try {
    //     const response = await getArtistStatus();
    //     setArtistStatus(response.data);
    //   } catch (e) {}
    // };
    // fetchArtistStatus();
    setArtistStatus(dummy);
  }, []);
  return <ArtistStatus artistStatus={artistStatus} />;
};

export default ArtistSendStatusContainer;
