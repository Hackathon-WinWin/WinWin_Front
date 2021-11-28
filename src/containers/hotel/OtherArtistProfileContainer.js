import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readOtherPortfolio } from '../../api/portfolio';
import { specificArtistProfile } from '../../api/profile';
import OtherProfile from '../../components/hotel/OtherArtistProfile';

const OtherArtistProfileContainer = () => {
  const { artistAuth_id } = useParams();
  const [otherProfile, setOtherProfile] = useState();
  const [otherPortfolio, setOtherPortfolio] = useState();
  useEffect(() => {
    const fetchOtherProfile = async () => {
      try {
        const response = await specificArtistProfile(artistAuth_id);
        setOtherProfile(response.data);
      } catch (e) {}
    };
    if (artistAuth_id) fetchOtherProfile();
  }, [artistAuth_id]);
  useEffect(() => {
    const fetchOtherPortfolio = async () => {
      try {
        const response = await readOtherPortfolio(artistAuth_id);
        setOtherPortfolio(response.data);
      } catch (e) {}
    };
    if (artistAuth_id) fetchOtherPortfolio();
  }, [artistAuth_id]);
  return (
    <OtherProfile otherProfile={otherProfile} otherPortfolio={otherPortfolio} />
  );
};

export default OtherArtistProfileContainer;
