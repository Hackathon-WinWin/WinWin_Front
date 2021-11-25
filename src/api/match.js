import axios from 'axios';

// 지원서 작성 화면에 필요한 정보들
// 파라미터로 해당 recruitment의 _id 전달
// :/recruitment_id
// 200: 필요한 정보 JSON 반환
// 400: recruitment_id로 recruitment 찾을 수 없음
// 500: 에러 내용
export const artistMakeApplication = async (recruitment_id) =>
  await axios.get(`/match/artistMakeApplication/${recruitment_id}`);

// 지원서 작성 완료
// 200: 성공
// 500: 에러 내용
export const artistSendApplication = async ({
  hotelAuth_id,
  recruitment_id,
  name,
  birthday,
  address,
  phoneNumber,
  email,
  hotelName,
  recruitmentTitle,
}) =>
  await axios.post('/match/artistSendApplication', {
    hotelAuth_id,
    recruitment_id,
    name,
    birthday,
    address,
    phoneNumber,
    email,
    hotelName,
    recruitmentTitle,
  });
// 제안서 작성 화면에 필요한 정보들
// 200: 필요한 정보 JSON 반환
// 500: 에러 내용
export const hotelMakeApplication = async () =>
  await axios.get('/match/hotelMakeApplication');

// 제안서 작성 완료
// 200: 성공
// 500: 에러 내용
export const hotelSendApplication = async ({
  recruitment_id,
  artistAuth_id,
  phoneNumber,
  email,
  title,
  message,
}) =>
  await axios.post('/match/hotelSendApplication', {
    recruitment_id,
    artistAuth_id,
    phoneNumber,
    email,
    title,
    message,
  });