/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flexbox } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Recruitment from '../hotel/recruitment/Recruitment';

const SpecificRecruitment = ({ specificRecruit }) => {
  if (!specificRecruit) return null;
  return (
    <Wrapper>
      <Header>
        <Link to={-1} css={BackBtn}>
          <img
            src={process.env.PUBLIC_URL + '/icons/back_button.png'}
            alt='icon'
          ></img>
        </Link>
        <h3>지원공고</h3>
        <div></div>
      </Header>
      <HotelExhibitImg>
        <li></li>
        <li></li>
        <li></li>
      </HotelExhibitImg>
      <div css={BottomBox}>
        <RecruitmentInfoCard>
          <div css={Top}>
            <h2>명동 메트로 호텔</h2>
            <Link
              to='/main'
              css={css`
                color: black;
                text-decoration: none;
              `}
            >
              더보기
            </Link>
          </div>
          <ul css={RecruitInfoList}>
            <li>
              <h4>위치</h4>
              <p>서울 중구 명동9가길 14</p>
            </li>
            <li>
              <h4>전시기간</h4>
              <p>서울 중구 명동9가길 14</p>
            </li>
            <li>
              <h4>전시기간</h4>
              <p>서울 중구 명동9가길 14</p>
            </li>
            <li>
              <h4>전시기간</h4>
              <p>서울 중구 명동9가길 14</p>
            </li>
            <li className='line'></li>
            <li>
              <h4>전시기간</h4>
              <p>서울 중구 명동9가길 14</p>
            </li>
            <li>
              <h4>전시기간</h4>
              <p>서울 중구 명동9가길 14</p>
            </li>
          </ul>
          <div css={Bottom}>
            <h3>호텔 창립 60주년 기념 전시</h3>
            <p>introintrointro</p>
          </div>
        </RecruitmentInfoCard>
      </div>
      {/* param : 공고 id */}
      <Link css={ApplyFormLink} to={`/apply`}>
        지원하기
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`;
const BackBtn = css`
  position: absolute;
  left: 16px;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid lightgray;
  background-color: white;
  & > h3 {
    align-self: center;
    justify-self: center;
  }
`;
const ApplyFormLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  background-color: #181818;
  height: 75px;
  width: 100%;
  position: sticky;
  bottom: 0;
`;
const HotelExhibitImg = styled.ul`
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: auto;
  scroll-snap-type: x mandatory; /* Chrome Canary */
  scroll-snap-type: mandatory; /* Firefox */
  -ms-scroll-snap-type: mandatory; /* IE/Edge */
  -webkit-scroll-snap-type: mandatory; /* Safari */
  -webkit-scroll-snap-destination: 0% 0%;
  -webkit-overflow-scrolling: touch; /* important for iOS */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & > li {
    box-sizing: border-box;
    width: 100%;
    height: 261px;
    border-left: 1px solid black;
    flex-shrink: 0;
    scroll-snap-align: start; /* latest (Chrome 69+) */
    scroll-snap-coordinate: 0% 0%; /* older (Firefox/IE) */
    -webkit-scroll-snap-coordinate: 0% 0%; /* older (Safari) */
    overflow: hidden;
    list-style: none;
    background-color: green;
    /* background-image: url(${({ image }) => image}); */
    background-repeat: no-repeat;
    background-size: cover;
    scroll-snap-align: start;
  }
`;
const BottomBox = css`
  flex: auto;
  position: relative;
`;
const RecruitmentInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  background-color: white;
  width: 86%;
  min-height: 100%;
  height: fit-content;
  padding: 25px 20px;
  top: -35px;
  left: calc(50vw - 43%);
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;
const Top = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const RecruitInfoList = css`
  display: flex;
  flex-direction: column;
  & > li {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    & > h4 {
      width: 80px;
    }
  }
  & .line {
    width: 100%;
    height: 1px;
    border-top: 1px solid lightgray;
  }
`;
const Bottom = css`
  display: flex;
  flex-direction: column;
`;
export default SpecificRecruitment;
