/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Recruitment from '../hotel/recruitment/Recruitment';

const SpecificRecruitment = ({ specificRecruit }) => {
  if (!specificRecruit) return null;
  const {
    hotelAuth_id,
    hotelName,
    address,
    bookMark,
    recruitment: {
      _id: recruitment_id,
      exhibitionStartDate,
      exhibitionEndDate,
      applicationStartDate,
      applicationEndDate,
      area,
      recruitNumber,
      concept,
      images,
      title,
      introduceText,
    },
  } = specificRecruit;
  return (
    <Wrapper>
      <Header>
        <Link to={-1} css={BackBtn}>
          <img
            src={process.env.PUBLIC_URL + '/icons/back.svg'}
            alt='back'
          ></img>
        </Link>
        <h3>지원공고</h3>
      </Header>
      <HotelExhibitImg>
        {images.map((image) => (
          <HotelItem image={image.image}></HotelItem>
        ))}
      </HotelExhibitImg>
      <div css={BottomBox}>
        <RecruitmentInfoCard>
          <div css={Top}>
            <h2>{hotelName}</h2>
            <Link
              to={`/otherHotelProfile/${hotelAuth_id}`}
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
              <p>{address}</p>
            </li>
            <li>
              <h4>신청기간</h4>
              <p>
                {dayjs(applicationStartDate).format('YY.MM.DD')} -{' '}
                {dayjs(applicationEndDate).format('YY.MM.DD')}
              </p>
            </li>
            <li>
              <h4>전시기간</h4>
              <p>
                {dayjs(exhibitionStartDate).format('YY.MM.DD')} -{' '}
                {dayjs(exhibitionEndDate).format('YY.MM.DD')}
              </p>
            </li>
            <li>
              <h4>전시공간</h4>
              <p>
                {area} m<sup>2</sup>
              </p>
            </li>
            <li className='line'></li>
            <li>
              <h4>전시컨셉</h4>
              <p>{concept}</p>
            </li>
            <li>
              <h4>모집인원</h4>
              <p>{recruitNumber} 명</p>
            </li>
          </ul>
          <div css={Bottom}>
            <h3>{title}</h3>
            <p>{introduceText}</p>
          </div>
        </RecruitmentInfoCard>
      </div>
      {/* param : 공고 id */}
      <Link css={ApplyFormLink} to={`/apply/${recruitment_id}`}>
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
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 10px;
    /* or 56% */

    display: flex;
    align-items: center;
    letter-spacing: 0.314367px;
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
`;
const HotelItem = styled.li`
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
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  scroll-snap-align: start;
`;
const BottomBox = css`
  flex: auto;
  position: relative;
  & > h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
  }
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
