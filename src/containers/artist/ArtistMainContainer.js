import React, { useState } from 'react';
import { useEffect } from 'react';
import { artistMainFirstPage } from '../../api/mainPage';
import ArtistMain from '../../components/artist/ArtistMain';

const ArtistMainContainer = () => {
  const [hotelList, setHotelList] = useState();
  useEffect(() => {
    const fetchArtistMain = async () => {
      try {
        const response = await artistMainFirstPage();
        setHotelList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchArtistMain();
    // setHotelList(dummyData);
  }, []);

  return <ArtistMain hotelList={hotelList} />;
};

export default ArtistMainContainer;
