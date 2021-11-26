import axios from 'axios';

export const artistMainFirstPage = async () =>
  await axios.get('/api/main/artistMainFirstPage');

export const hotelMainFirstPage = async () =>
  await axios.get('/api/main/hotelMainFirstPage');
