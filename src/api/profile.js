import axios from 'axios';

// ## ARTIST ##

// 아티스트 프로필 생성 유무 확인
// 200: 프로필 존재
// 400: 프로필 존재하지 않음
// 500: 에러 내용
export const checkArtistProfile = async () =>
  await axios.get('/api/profile/checkArtistProfile');

// 아티스트 프로필 생성
// birthday만 Date, 나머지 String
// 200: 아티스트 프로필 생성 성공
// 400: 이미 사용중인 닉네임
// 401: 이미 사용중인 이메일
// 500: 에러 내용
export const createArtistProfile = async ({
  nickname,
  name,
  birthday,
  address,
  email,
  introduceText,
}) =>
  await axios.post('/api/profile/createArtistProfile', {
    nickname,
    name,
    birthday,
    address,
    email,
    introduceText,
  });
// 아티스트 프로필 수정
// 200: 프로필 수정 성공
// 400: 이미 사용중인 닉네임
// 401: 이미 사용중인 이메일
// 402: 소개글 최대 길이 - 40
// 500: 에러 내용
export const updateArtistProfile = async ({
  nickname,
  name,
  birthday,
  address,
  email,
  introduceText,
}) =>
  await axios.post('/api/profile/updateArtistProfile', {
    nickname,
    name,
    birthday,
    address,
    email,
    introduceText,
  });

// 특정 아티스트의 프로필
// 파라미터에 artistAuth_id 값 전달
// 해당 artist의 프로필 반환
// 200: 특정 아티스트의 프로필 정보
// 500: 에러 내용
export const specificArtistProfile = async (artistAuth_id) =>
  await axios.get(`/api/profile/artistProfile/${artistAuth_id}`);

// ## HOTEL ##

// 호텔 프로필 생성 유무 확인
// 200: 프로필 존재
// 400: 프로필 존재하지 않음
// 500: 에러 내용
export const checkHotelProfile = async () =>
  await axios.get('/api/profile/checkHotelProfile');

// 호텔 프로필 생성
// 200: 호텔 프로필 생성 성공
// 400: 이미 사용중인 전화번호
// 401: 이미 사용중인 이메일
// 500: 에러 내용
export const createHotelProfile = async ({
  hotelName,
  address,
  phoneNumber,
  email,
  introduceText,
}) =>
  await axios.post('/api/profile/createHotelProfile', {
    hotelName,
    address,
    phoneNumber,
    email,
    introduceText,
  });

export const specificHotelProfile = async (hotelAuth_id) =>
  await axios.get(`/api/profile/hotelProfile/${hotelAuth_id}`);
