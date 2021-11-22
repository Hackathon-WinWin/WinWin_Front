import axios from 'axios';

// ## ARTIST ##

// 프로필 이미지 설정
// 200: 아티스트 프로필 이미지 저장 성공
// 500: 에러 내용
export const updateArtistProfileImage = async (formData) =>
  await axios.post('/profile/updateArtistProfileImage', {
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
// 배경이미지 설정
// 200: 아티스트 배경 이미지 저장 성공
// 500: 에러 내용
export const updateArtistBackgroundImage = async (formData) =>
  await axios.post('/profile/updateArtistBackgroundImage', {
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

// ## HOTEL ##

// 현재 로그인된 사용자의 호텔 프로필
// 200: 프로필 정보
// 500: 에러 내용
export const getMyHotelProfile = async () =>
  await axios.get('/profile/myHotelProfile');

// 호텔 프로필 이미지
// 200: 이미지 주소 담은 JSON 반환
// 400: 이미지 없음
// 500: 에러 내용
export const getMyHotelProfileImage = async () =>
  await axios.get('/profile/myHotelProfileImage');

// form data로 프로필 이미지 파일 전송
// 이미지 있을 떄만 요청 보내기
// 200: 호텔 프로필 이미지 변경 성공
// 500: 에러 내용
export const updateHotelProfileImage = async (formData) =>
  await axios.post('/profile/updateHotelProfileImage', {
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
// 호텔 이미지 추가
// 200: 저장 성공
// 500: 에러 내용
export const addHotelImage = async (formData) =>
  await axios.post('/profile/addHotelImage', {
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
