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
  email,
}) =>
  await axios.post('/profile/createArtistProfile', {
    nickname,
    name,
    birthday,
    email,
  });
// 프로필 이미지 설정
// 200: 아티스트 프로필 이미지 저장 성공
// 500: 에러 내용
export const createArtistProfileImage = async (formData) =>
  await axios.post('/profile/createArtistProfileImage', {
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
// 배경이미지 설정
// 200: 아티스트 배경 이미지 저장 성공
// 500: 에러 내용
export const createArtistBackgroundImage = async (formData) =>
  await axios.post('/profile/createArtistBackgroundImage', {
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
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
  coords,
  phoneNumber,
  email,
  introduceText,
}) =>
  await axios.post('/profile/createHotelProfile', {
    hotelName,
    coords,
    phoneNumber,
    email,
    introduceText,
  });
