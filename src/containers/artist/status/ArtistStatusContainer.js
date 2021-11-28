import React, { useState } from 'react';
import { useEffect } from 'react';
import { getArtistStatus } from '../../../api/match';
import ArtistStatus from '../../../components/artist/status/ArtistStatus';

const ArtistSendStatusContainer = () => {
  const [artistStatus, setArtistStatus] = useState();
  useEffect(() => {
    const fetchArtistStatus = async () => {
      try {
        const response = await getArtistStatus();
        setArtistStatus(response.data);
      } catch (e) {}
    };
    fetchArtistStatus();
  }, []);
  return <ArtistStatus artistStatus={artistStatus} />;
};

export default ArtistSendStatusContainer;
