import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { readSpecificPortfolio } from '../../api/portfolio';
import SpecificPortfolio from '../../components/hotel/SpecificPortfolio';

const SpecificPortfolioContainer = () => {
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
    <SpecificPortfolio
      specificPortfolio={specificPortfolio}
      artistInfo={artistInfo}
      artistAuth_id={artistAuth_id}
    />
  );
};

export default SpecificPortfolioContainer;
