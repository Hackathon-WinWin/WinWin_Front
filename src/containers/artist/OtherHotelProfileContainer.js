import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { specificHotelProfile } from '../../api/profile';
import OtherHotelProfile from '../../components/artist/OtherHotelProfile';

const OtherHotelProfileContainer = () => {
  const { hotelAuth_id } = useParams();
  const [otherHotelProfile, setOtherHoterProfile] = useState();
  useEffect(() => {
    const fetchOtherHotelProfile = async () => {
      try {
        const response = await specificHotelProfile(hotelAuth_id);
        setOtherHoterProfile(response.data);
      } catch (e) {}
    };
    if (hotelAuth_id) fetchOtherHotelProfile();
  }, [hotelAuth_id]);

  return <OtherHotelProfile otherHotelProfile={otherHotelProfile} />;
};

export default OtherHotelProfileContainer;
