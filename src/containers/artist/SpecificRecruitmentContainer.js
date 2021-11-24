import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readSpecificRecruitment } from '../../api/recruitment';
import SpecificRecruitment from '../../components/artist/SpecificRecruitment';

// 특정 공고 데이터
const dummy = {};
const SpecificRecruitmentContainer = () => {
  const { hotelAuth_id, recruitment_id } = useParams();
  const [specificRecruit, setSpecificRecruit] = useState();
  useEffect(() => {
    // const fetchSpecificRecruit = async () => {
    //   try {
    //     const response = await readSpecificRecruitment({
    //       hotelAuth_id,
    //       recruitment_id,
    //     });
    //     setSpecificRecruit(response.data);
    //   } catch (e) {}
    // };
    // if (hotelAuth_id && recruitment_id) fetchSpecificRecruit();
    if (hotelAuth_id && recruitment_id) setSpecificRecruit(dummy);
  }, [hotelAuth_id, recruitment_id]);
  return <SpecificRecruitment specificRecruit={specificRecruit} />;
};

export default SpecificRecruitmentContainer;
