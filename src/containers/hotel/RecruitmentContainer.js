import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Recruitment from '../../components/hotel/Recruitment';
import { readMyRecruitment } from '../../modules/recruitment';

const RecruitmentContainer = () => {
  const { myRecuitementList } = useSelector(({ recruitment }) => ({
    myRecuitementList: recruitment.myRecuitementList,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readMyRecruitment());
  }, [dispatch]);
  return <Recruitment myRecuitementList={myRecuitementList} />;
};

export default RecruitmentContainer;
