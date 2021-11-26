import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { readSpecificPortfolio } from '../../../api/portfolio';
import MySpecificPortfolio from '../../../components/artist/mypage/MySpecificPortfolio';

const MySpecificPortfolioContainer = () => {
  const { artistAuth_id, portfolio_id } = useParams();
  const { state: artistInfo } = useLocation();
  const [specificPortfolio, setSpecificPortfolio] = useState();
  useEffect(() => {
    const fetchSpecificPortfolio = async () => {
      try {
        const response = await readSpecificPortfolio({
          artistAuth_id,
          portfolio_id,
        });
        setSpecificPortfolio(response.data);
      } catch (e) {}
    };
    if (artistAuth_id && portfolio_id) fetchSpecificPortfolio();
  }, [artistAuth_id, portfolio_id]);
  return (
    <MySpecificPortfolio
      specificPortfolio={specificPortfolio}
      artistInfo={artistInfo}
      artistAuth_id={artistAuth_id}
    />
  );
};

export default MySpecificPortfolioContainer;
