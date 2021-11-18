import axios from 'axios';

// ARTIST
// 회원가입
export const artistSignup = async ({ account, password, phoneNumber }) =>
  await axios.post('3.12.248.32:8000/auth/createArtist', {
    account,
    password,
    phoneNumber,
  });

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

// COMMON
// 로그인
export const signin = async ({ account, password }) =>
  await axios.post('/auth/login', {
    account,
    password,
  });
// 로그아웃
export const Logout = async () => await axios.post('/auth/logout');

// 로그인 상태인지 확인
// 200: 로그인 상태임, 로그인된 유저 아이디 전달
// 411: loginToken 만료
// 412: loginToken decode 실패
// 501: 이외의 모든 에러(토큰 없는 경우 포함)
// 200 이외에는 전부 로그인 X
// 200: 호텔이면 false, 아티스트면 true
export const checkLoggedIn = async () => await axios.get('/auth/checkLoggedIn');

// 아이디 양식 확인
// 영어 대문자, 소문자, 숫자로만 가능
// 빈칸 불가능
// 200: 이상 없음
// 400: 아이디 양식 불일치
// 401: 아이디 중복
// 500: 에러 내용
export const checkAccount = async (account) =>
  await axios.post('/auth/checkAccount', { account });
