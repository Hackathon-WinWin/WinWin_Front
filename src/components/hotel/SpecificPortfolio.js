/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

const SpecificPortfolio = ({
  specificPortfolio,
  artistInfo,
  artistAuth_id,
}) => {
  if (!specificPortfolio) return null;
  if (!artistInfo) {
    return <Navigate to={-1} replace={true} />;
  }
  const { introduceText, link, images } = specificPortfolio;
  const { artistName, profileImageURL } = artistInfo;
  return (
    <Wrapper>
      <Header>
        <Link to={-1}>뒤로 가기</Link>
        <h3>아티스트 탐색</h3>
        <div></div>
      </Header>
      <div>
        <Link
          to={`/otherArtistProfile/${artistAuth_id}`}
          css={ProfileLink}
          replace={true}
        >
          <div image={profileImageURL}></div>
          <span>{artistName}</span>
        </Link>
      </div>
      <PortfolioImgList>
        {images.map((image) => (
          <PortfolioImgItem
            key={image._id}
            image={image.image}
          ></PortfolioImgItem>
        ))}
      </PortfolioImgList>
      <LinkBox>
        <span>링크</span>
        <p>{link}</p>
      </LinkBox>
      <IntroduceBox>{introduceText}</IntroduceBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid lightgray;
  & > h3 {
    align-self: center;
    justify-self: center;
  }
`;
const ProfileLink = css`
  display: flex;
  padding: 16px;
  text-decoration: none;
  color: black;
  & > div {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: lightgray;
    margin-right: 12px;
    background-image: url(${({ image }) => image});
  }
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const PortfolioImgList = styled.ul`
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
const PortfolioImgItem = styled.li`
  box-sizing: border-box;
  width: 100%;
  height: 361px;
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
const LinkBox = styled.div`
  display: flex;
  padding: 16px;
  & > span {
    width: 50px;
  }
`;
const IntroduceBox = styled.div`
  padding: 0 16px;
`;
export default SpecificPortfolio;
