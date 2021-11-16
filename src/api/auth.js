import axios from 'axios';

// ARTIST
// 회원가입
export const artistSignup = async ({ account, password, phoneNumber }) =>
  await axios.post('/auth/createArtist', {
    account,
    password,
    phoneNumber,
  });
// 로그인
export const artistSignin = async ({ account, password }) =>
  await axios.post('/auth/artistLogin', {
    account,
    password,
  });
// 로그아웃
export const artistLogout = async () => await axios.post('/auth/artistLogout');

// HOTEL
// 회원가입
export const hotelSignup = async ({
  account,
  password,
  hostName,
  openDate,
  businessNumber,
}) =>
  await axios.post('/auth/createHotel', {
    account,
    password,
    hostName,
    openDate,
    businessNumber,
  });
// 로그인
export const hotelSignin = async ({ account, password }) =>
  await axios.post('/auth/hotelLogin', {
    account,
    password,
  });
// 로그아웃
export const hotelLogout = async () => await axios.post('/auth/hotelLogout');

// 로그인 상태인지 확인
export const checkLoggedIn = async () =>
  await axios.post('/auth/checkLoggedIn');
