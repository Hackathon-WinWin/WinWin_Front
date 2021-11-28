/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OtherArtistProfile = ({ otherProfile, otherPortfolio }) => {
  if (!otherProfile || !otherPortfolio) return null;
  const {
    backgroundImageURL,
    profileImageURL,
    profile: { name, introduceText },
  } = otherProfile;
  const { artistAuth_id, portfolios } = otherPortfolio;
  return (
    <Wrapper>
      <Header>
        <Link
          to='/main'
          css={css`
            position: absolute;
            left: 16px;
          `}
        >
          <img src={process.env.PUBLIC_URL + '/icons/back.svg'} alt='back' />
        </Link>
        <h3>아티스트 탐색</h3>
      </Header>
      <ArtistBgImg backgroundImage={backgroundImageURL}></ArtistBgImg>
      <ArtistInfo>
        <ArtistProfileImg profileImage={profileImageURL}></ArtistProfileImg>
        <ArtistName>{name}</ArtistName>
        <IntroText>{introduceText}</IntroText>
      </ArtistInfo>
      <PortfolioList>
        {!portfolios && <p>loading...</p>}
        {portfolios &&
          (portfolios.length === 0 ? (
            <p>개인 포트폴리오를 추가해보세요!</p>
          ) : (
            portfolios.map((portfolio) => (
              <PreviewItem
                key={portfolio._id}
                image={portfolio.images[0].image}
              >
                <Link
                  css={css`
                    display: block;
                    width: 100%;
                    height: 100%;
                  `}
                  to={`/specificPortfolio/${artistAuth_id}/${portfolio._id}`}
                  state={{ profileImageURL, artistName: name }}
                />
              </PreviewItem>
            ))
          ))}
      </PortfolioList>
      <Link css={ProposeFormLink} to={`/propose/${artistAuth_id}`}>
        제안하기
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 16px;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid lightgray;
`;
const ArtistBgImg = styled.div`
  width: 100vw;
  height: 220px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
const ArtistInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 185px;
  width: 70%;
`;
const ArtistProfileImg = styled.div`
  position: absolute;
  bottom: calc(185px - 53px);
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background-image: url(${({ profileImage }) => profileImage});
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;
const ArtistName = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  margin-top: 80px;
  color: #181818;
`;
const IntroText = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #000000;
  opacity: 0.5;
  flex: auto;
`;
const PortfolioList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 167px);
  grid-template-rows: repeat(auto-fit, 167px);
  grid-gap: 18px;
  background-color: #f9f9f9;
  width: 100vw;
  flex: auto;
  padding: 16px;
  margin-bottom: 80px;
  box-sizing: border-box;
  & > p {
    margin: 30px auto 0;
  }
`;
const PreviewItem = styled.li`
  list-style: none;
  width: 167px;
  height: 167px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  filter: drop-shadow(0px 1px 7px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
`;

const ProposeFormLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  background-color: #181818;
  height: 75px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;
export default OtherArtistProfile;
