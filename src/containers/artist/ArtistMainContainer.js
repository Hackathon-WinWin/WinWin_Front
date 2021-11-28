import React, { useState } from 'react';
import { useEffect } from 'react';
import { artistMainFirstPage } from '../../api/mainPage';
import ArtistMain from '../../components/artist/ArtistMain';

// const dummyData = [
//   {
//     hotelAuth_id: '619ce024293e4de24bb2b523',
//     hotelName: '서울 호텔',
//     address: '서울시 강남구 대치동',
//     bookMark: 0,
//     recruitment: {
//       hotelAuth_id: '619ce024293e4de24bb2b523',
//       exhibitionStartDate: '2022-01-01T00:00:00.000Z',
//       exhibitionEndDate: '2022-01-31T00:00:00.000Z',
//       applicationStartDate: '2021-12-01T00:00:00.000Z',
//       applicationEndDate: '2021-12-31T00:00:00.000Z',
//       area: 500,
//       concept: '자연',
//       images: [],
//       title: '서울호텔 자연컨셉 작품 모집',
//       introduceText: '안녕하세요 서울호텔입니다.',
//       _id: '619ce0b8293e4de24bb2b564',
//     },
//   },
//   {
//     hotelAuth_id: '619ce024293e4de24bb2b523',
//     hotelName: '서울 호텔',
//     address: '서울시 강남구 대치동',
//     bookMark: 0,
//     recruitment: {
//       hotelAuth_id: '619ce024293e4de24bb2b523',
//       exhibitionStartDate: '2022-01-01T00:00:00.000Z',
//       exhibitionEndDate: '2022-01-31T00:00:00.000Z',
//       applicationStartDate: '2021-12-01T00:00:00.000Z',
//       applicationEndDate: '2021-12-31T00:00:00.000Z',
//       area: 500,
//       concept: '자연',
//       images: [],
//       title: '서울호텔 자연컨셉 작품 모집',
//       introduceText: '안녕하세요 서울호텔입니다.',
//       _id: '619ce0b8293e4de24bb2b564',
//     },
//   },
//   {
//     hotelAuth_id: '619ce024293e4de24bb2b523',
//     hotelName: '서울 호텔',
//     address: '서울시 강남구 대치동',
//     bookMark: 0,
//     recruitment: {
//       hotelAuth_id: '619ce024293e4de24bb2b523',
//       exhibitionStartDate: '2022-01-01T00:00:00.000Z',
//       exhibitionEndDate: '2022-01-31T00:00:00.000Z',
//       applicationStartDate: '2021-12-01T00:00:00.000Z',
//       applicationEndDate: '2021-12-31T00:00:00.000Z',
//       area: 500,
//       concept: '자연',
//       images: [],
//       title: '서울호텔 자연컨셉 작품 모집',
//       introduceText: '안녕하세요 서울호텔입니다.',
//       _id: '619ce0b8293e4de24bb2b564',
//     },
//   },
//   {
//     hotelAuth_id: '619ce024293e4de24bb2b523',
//     hotelName: '서울 호텔',
//     address: '서울시 강남구 대치동',
//     bookMark: 0,
//     recruitment: {
//       hotelAuth_id: '619ce024293e4de24bb2b523',
//       exhibitionStartDate: '2022-01-01T00:00:00.000Z',
//       exhibitionEndDate: '2022-01-31T00:00:00.000Z',
//       applicationStartDate: '2021-12-01T00:00:00.000Z',
//       applicationEndDate: '2021-12-31T00:00:00.000Z',
//       area: 500,
//       concept: '자연',
//       images: [],
//       title: '서울호텔 자연컨셉 작품 모집',
//       introduceText: '안녕하세요 서울호텔입니다.',
//       _id: '619ce0b8293e4de24bb2b564',
//     },
//   },
// ];
const ArtistMainContainer = () => {
  const [hotelList, setHotelList] = useState();
  useEffect(() => {
    const fetchArtistMain = async () => {
      try {
        const response = await artistMainFirstPage();
        setHotelList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchArtistMain();
    // setHotelList(dummyData);
  }, []);

  return <ArtistMain hotelList={hotelList} />;
};

export default ArtistMainContainer;
