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
            <RecruitItem key={index}>
              <h3>{recruit.title}</h3>
              <p>{recruit.introduceText}</p>
            </RecruitItem>
          ))}
      </RecruitList>
      <AddRecruit to="/createRecruit">
        <img
          src={process.env.PUBLIC_URL + '/icons/gonggo_write.svg'}
          alt="공고"
        />
      </AddRecruit>
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
`;
const RecruitItem = styled.li`
  padding: 30px 16px;
  height: 110px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  & > h3 {
    font-size: 18px;
    font-weight: 700;
  }
  & > p {
    font-size: 14px;
    font-weight: 400;
  }
`;
const AddRecruit = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  position: absolute;
  right: 10%;
  bottom: 12%;
  text-decoration: none;
  border-radius: 50%;
  color: white;
`;
export default Recruitment;
