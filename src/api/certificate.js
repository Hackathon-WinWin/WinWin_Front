import axios from 'axios';

// ARTIST
// 전화 인증번호 요청
// 인증 유효기간 : 3분
// 프론트 측에서 3분 타이머 표시해주고 3분 지난 이후에 인층 요청하면 인증번호 만료 문구 표시해주기
// 200: 전화 인증번호 요청 성공
// 501: 네이버 SENS API 에러
// 500: 에러 내용
export const requireNumber = async (phoneNumber) =>
  await axios.post('/auth/sms', {
    phoneNumber,
  });
// 인증번호 확인
// 200: 인증 성공
// 400: 인증번호 불일치
// 500: 에러 내용
export const checkNumber = async ({ phoneNumber, certification }) =>
  await axios.post('/auth/smsCheck', {
    phoneNumber,
    certification,
  });

// HOTEL

// 사업자번호 확인 API
// 사업자등록번호 인증
// 형식 맞춰서 입력 받기
// 200: 인증 성공
// 400: 인증 실패
// 500: 에러 내용
export const checkBusiness = async ({ businessNumber, openDate, hostName }) =>
  await axios.post('/auth/business', { businessNumber, openDate, hostName });
