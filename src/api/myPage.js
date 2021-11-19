import axios from 'axios';

// ARTIST
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

// 아티스트 프로필 정보
export const getMyAritistProfile = async () =>
  await axios.get('/profile/myArtistProfile');

// 아티스트 프로필 이미지
export const getMyArtistProfileImg = async () =>
  await axios.get('/profile/myArtistProfileImage');

// 아티스트 배경 이미지
export const getMyArtistBgImg = async () =>
  await axios.get('/profile/myArtistBackgroundImage');

// HOTEL
