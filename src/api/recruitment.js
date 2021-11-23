import axios from 'axios';

export const addRecruitment = async (formData) =>
  await axios.post('/recruitment/addRecruitment', {
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });

export const readMyRecruitment = async () =>
  await axios.get('/recruitment/readMyRecruitment');

export const readHotelRecruitment = async (hotelAuth_id) =>
  await axios.get(`/recruitment/readHotelRecruitment/${hotelAuth_id}`);

export const readSpecificRecruitment = async ({
  hotelAuth_id,
  recruitment_id,
}) =>
  await axios.get(
    `/recruitment/readSpecificRecruitment/${hotelAuth_id}/${recruitment_id}`
  );
