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
      <RecruitList>
        {myRecuitementList.recruitments.length !== 0 &&
          myRecuitementList.recruitments.map((recruit, index) => (
            <li key={index}>
              <h4>{recruit.title}</h4>
              <p>{recruit.introduceText}</p>
            </li>
          ))}
      </RecruitList>
      <AddRecruit to='/createRecruit'>test</AddRecruit>
    </RecruitmentWrapper>
  );
};
const RecruitmentWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
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
const RecruitList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  & > li {
    padding: 16px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid lightgray;
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
