import axios from 'axios';

// ## ARTIST ##

// 아티스트 프로필 생성 유무 확인
// 200: 프로필 존재
// 400: 프로필 존재하지 않음
// 500: 에러 내용
export const checkArtistProfile = async () =>
  await axios.get('/profile/checkArtistProfile');

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
  await axios.post('/profile/createArtistProfile', {
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
  await axios.post('/profile/updateArtistProfile', {
    nickname,
    name,
    birthday,
    address,
    email,
    introduceText,
  });
// ## HOTEL ##

// 호텔 프로필 생성 유무 확인
// 200: 프로필 존재
// 400: 프로필 존재하지 않음
// 500: 에러 내용
export const checkHotelProfile = async () =>
  await axios.get('/profile/checkHotelProfile');

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
  await axios.post('/profile/createHotelProfile', {
    hotelName,
    address,
    phoneNumber,
    email,
    introduceText,
  });
