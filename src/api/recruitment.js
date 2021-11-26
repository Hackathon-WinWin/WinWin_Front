import axios from 'axios';

export const addRecruitment = async (formData) =>
  await axios({
    url: '/api/recruitment/addRecruitment',
    method: 'post',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });

export const readMyRecruitment = async () =>
  await axios.get('/api/recruitment/readMyRecruitment');

export const readHotelRecruitment = async (hotelAuth_id) =>
  await axios.get(`/api/recruitment/readHotelRecruitment/${hotelAuth_id}`);

export const readSpecificRecruitment = async ({
  hotelAuth_id,
  recruitment_id,
}) =>
  await axios.get(
    `/api/recruitment/readSpecificRecruitment/${hotelAuth_id}/${recruitment_id}`
  );
