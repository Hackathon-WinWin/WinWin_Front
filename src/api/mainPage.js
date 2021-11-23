import axios from 'axios';

export const artistMainFirstPage = async () =>
  await axios.get('/main/artistMainFirstPage');

export const hotelMainFirstPage = async () =>
  await axios.get('/main/hotelMainFirstPage');
