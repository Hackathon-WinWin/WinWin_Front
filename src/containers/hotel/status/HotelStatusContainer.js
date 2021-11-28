import React, { useEffect } from 'react';
import { useState } from 'react';
import { getHotelStatus } from '../../../api/match';
import HotelStatus from '../../../components/hotel/status/HotelStatus';

const HotelStatusContainer = () => {
  const [hotelStatus, setHotelStatus] = useState();
  useEffect(() => {
    const fetchArtistStatus = async () => {
      try {
        const response = await getHotelStatus();
        setHotelStatus(response.data);
      } catch (e) {}
    };
    fetchArtistStatus();
  }, []);
  return <HotelStatus hotelStatus={hotelStatus} />;
};

export default HotelStatusContainer;
