import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Recruitment = ({ myRecuitementList }) => {
  if (!myRecuitementList) return null;
  return (
    <RecruitmentWrapper>
      <Header>
        <h3>공고 관리</h3>
      </Header>
      <ul>
        {myRecuitementList.recruitments.length !== 0 &&
          myRecuitementList.recruitments.map((recruit) => <li></li>)}
        <li></li>
      </ul>
      <AddRecruit to='/createRecuit'>test</AddRecruit>
    </RecruitmentWrapper>
  );
};
const RecruitmentWrapper = styled.div`
  width: 100vw;
  min-height: 10vh;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  height: 60px;
  width: 100vw;
  & > h3 {
    color: white;
    width: fit-content;
    height: fit-content;
  }
`;
const AddRecruit = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  background-color: #181818;
  position: absolute;
  right: 10%;
  bottom: 12%;
  text-decoration: none;
  border-radius: 50%;
  color: white;
`;
export default Recruitment;
