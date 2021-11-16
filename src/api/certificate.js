import axios from 'axios';

// ARTIST
// 전화번호 인증 요청
// phonenumber 이름 통일
export const requireNumber = async (phonenumber) =>
  await axios.post('/auth/sms', {
    phonenumber,
  });
// 인증번호 확인
export const checkNumber = async ({ phonenumber, certification }) =>
  await axios.post('/auth/smsCheck', {
    phonenumber,
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
