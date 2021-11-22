import axios from 'axios';

// title, introduceText, link 빈칸일 경우 "" 값 넣어주기
// images 개수 제한 없음
// 200: 포트폴리오 추가 성공
// 500: 에러 내용
export const addPortfolio = async (formData) =>
  await axios.post('portfolio/addPortfolio', {
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });

// 로그인한 유저의 포트폴리오 목록 배열 반환
// 200: JSON 반환
// 400: 포트폴리오를 찾을 수 없음
// 500: 에러 내용
export const readMyPortfolio = async () =>
  await axios.get('/portfolio/readMyPortfolio');

// 아티스트별 포트폴리오 목록 렌더링 할 때 요청
// 파라미터로 artistAuth_id 전달
// 200: portfolio JSON 전달
// 400: 포트폴리오 찾을 수 없음
// 500: 에러 내용
export const readOtherPortfolio = async (artistAuth_id) =>
  await axios.get(`/portfolio/readOtherPortfolio/:${artistAuth_id}`);

// 특정 포트폴리오를 읽을 때 사용
// 파라미터로 /:artistAuth_id /:portfolio_id 주기
// 200: 해당 포트폴리오 JSON 반환
// 400: 포트폴리오 찾을 수 없음
// 500: 에러 내용
export const readSpecificPortfolio = async ({ artistAuth_id, portfolio_id }) =>
  await axios.get(
    `/portfolio/readSpecificPortfolio/:${artistAuth_id}/:${portfolio_id}`
  );
