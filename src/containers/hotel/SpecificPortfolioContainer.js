import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { readSpecificPortfolio } from '../../api/portfolio';
import SpecificPortfolio from '../../components/hotel/SpecificPortfolio';

// 다른 사람의 특정 포트폴리오
const dummy = {
  artistAuth_id: '619c96a0a5f1fece6e970d92',
  title: '포트폴리오 제목',
  introduceText: '소개글',
  link: '링크',
  images: [
    {
      image:
        'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/9381637652340067.png',
      _id: '619c9774c12d23e494730d93',
    },
    {
      image:
        'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/791637652340072.png',
      _id: '619c9774c12d23e494730d94',
    },
  ],
  _id: '619c9774c12d23e494730d92',
};
const SpecificPortfolioContainer = () => {
  const { artistAuth_id, portfolio_id } = useParams();
  const { state: artistInfo } = useLocation();
  const [specificPortfolio, setSpecificPortfolio] = useState();
  useEffect(() => {
    // const fetchSpecificPortfolio = async () => {
    //   try {
    //     const response = await readSpecificPortfolio({
    //       artistAuth_id,
    //       portfolio_id,
    //     });
    //     setSpecificPortfolio(response.data);
    //   } catch (e) {}
    // };
    // if (artistAuth_id && portfolio_id) fetchSpecificPortfolio();
    if (artistAuth_id && portfolio_id) setSpecificPortfolio(dummy);
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
