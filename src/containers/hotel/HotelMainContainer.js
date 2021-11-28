import React, { useEffect, useState } from 'react';
import { hotelMainFirstPage } from '../../api/mainPage';
import HotelMain from '../../components/hotel/HotelMain';

const HotelMainContainer = () => {
  const [artistProfiles, setArtistProfiles] = useState();
  useEffect(() => {
    const fetchArtistMain = async () => {
      try {
        const response = await hotelMainFirstPage();
        setArtistProfiles(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchArtistMain();
  }, []);
  return <HotelMain artistProfiles={artistProfiles} />;
};

export default HotelMainContainer;
