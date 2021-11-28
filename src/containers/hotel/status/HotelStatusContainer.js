import React, { useEffect } from 'react';
import { useState } from 'react';
import { getHotelStatus } from '../../../api/match';
import HotelStatus from '../../../components/hotel/status/HotelStatus';

// const dummy = {
//   _id: '619c9646a5f1fece6e970d78',
//   hotelAuth_id: '619c963ba5f1fece6e970d6b',
//   sent: [
//     {
//       application_id: '619f0f7f58ab59229b6807ec',
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       name: '공혁준',
//       message:
//         '여기에 작품 걸어,여기에 작품 걸어,여기에 작품 걸어,여기에 작품 걸어,여기에 작품 걸어',
//       phoneNumber: '010-7999-8559',
//       email: 'hotel@hotel.com',
//       title: '야아아아아',
//       checked: false,
//       _id: '619f0f7f58ab59229b6807f0',
//     },
//     {
//       application_id: '619f0f9358ab59229b680811',
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       name: '공혁준',
//       message: '여기에 작품 걸어',
//       phoneNumber: '010-7999-8559',
//       email: 'hotel@hotel.com',
//       title: '야아아아아',
//       checked: false,
//       _id: '619f0f9358ab59229b680815sadfsadf',
//     },
//     {
//       application_id: '619f0f9358ab59229b680811',
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       name: '공혁준',
//       message: '여기에 작품 걸어',
//       phoneNumber: '010-7999-8559',
//       email: 'hotel@hotel.com',
//       title: '야아아아아',
//       checked: true,
//       checkedDate: '2021-02-05T00:00:00.000Z',
//       _id: '619f0f9358ab59229b680815',
//     },
//   ],
//   recieved: [
//     {
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       recruitment_id: '619c964ba5f1fece6e970d7d',
//       recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
//       writtenTime: '2021-11-23T07:26:37.695Z',
//       nickname: 'ojj1123',
//       _id: '619c97adc12d23e494730db0',
//     },
//     {
//       application_id: '619c9867d27f5f72360fa15f',
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       recruitment_id: '619c964ba5f1fece6e970d7d',
//       recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
//       writtenTime: '2021-11-23T07:29:43.411Z',
//       nickname: 'ojj1123',
//       _id: '619c9867d27f5f72360fa165',
//     },
//     {
//       application_id: '619ed520e3bcd7df90df9efc',
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       recruitment_id: '619c964ba5f1fece6e970d7d',
//       recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
//       writtenTime: '2021-11-25T00:13:20.623Z',
//       nickname: 'ojj1123',
//       _id: '619ed520e3bcd7df90df9f03',
//     },
//     {
//       application_id: '619ed528e3bcd7df90df9f0e',
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       recruitment_id: '619c964ba5f1fece6e970d7d',
//       recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
//       writtenTime: '2021-11-25T00:13:28.661Z',
//       nickname: 'ojj1123',
//       _id: '619ed528e3bcd7df90df9f16',
//     },
//     {
//       application_id: '619ed540e3bcd7df90df9f28',
//       artistAuth_id: '619c96a0a5f1fece6e970d92',
//       recruitment_id: '619c964ba5f1fece6e970d7d',
//       recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
//       writtenTime: '2021-11-25T00:13:52.337Z',
//       nickname: 'ojj1123',
//       _id: '619ed540e3bcd7df90df9f31',
//     },
//   ],
//   __v: 0,
// };
const HotelStatusContainer = () => {
  const [hotelStatus, setHotelStatus] = useState();
  useEffect(() => {
    const fetchArtistStatus = async () => {
      try {
        const response = await getHotelStatus();
        setHotelStatus(response.data);
      } catch (e) {}
    };
    fetchArtistStatus();
    // setHotelStatus(dummy);
  }, []);
  return <HotelStatus hotelStatus={hotelStatus} />;
};

export default HotelStatusContainer;
