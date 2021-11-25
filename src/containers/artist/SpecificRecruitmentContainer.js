import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readSpecificRecruitment } from '../../api/recruitment';
import SpecificRecruitment from '../../components/artist/SpecificRecruitment';

// 특정 공고 데이터
const dummy = {
  hotelAuth_id: '619c963ba5f1fece6e970d6b',
  hotelName: '서울 호텔',
  address: '서울시 강남구 대치동',
  bookMark: 0,
  recruitment: {
    hotelAuth_id: '619c963ba5f1fece6e970d6b',
    exhibitionStartDate: '2022-01-01T00:00:00.000Z',
    exhibitionEndDate: '2022-01-31T00:00:00.000Z',
    applicationStartDate: '2021-12-01T00:00:00.000Z',
    applicationEndDate: '2021-12-31T00:00:00.000Z',
    area: 500,
    recruitNumber: 10,
    concept: '자연',
    images: [
      {
        image:
          'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/6491637652043287.png',
        _id: '619c964ba5f1fece6e970d7e',
      },
      {
        image:
          'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/3811637652043292.png',
        _id: '619c964ba5f1fece6e970d7f',
      },
      {
        image:
          'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/311637652043307.png',
        _id: '619c964ba5f1fece6e970d80',
      },
    ],
    title: '서울호텔 자연컨셉 작품 모집',
    introduceText: '안녕하세요 서울호텔입니다.',
    _id: '619f2d1c609aab11d70aff42',
  },
};
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
