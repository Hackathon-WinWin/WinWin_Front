/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OtherProfile = ({ otherProfile, otherPortfolio }) => {
  if (!otherProfile && !otherPortfolio) return null;
  const {
    backgroundImageURL,
    profileImageURL,
    profile: { name, phoneNumber, email },
  } = otherProfile;
  const { artistAuth_id, portfolios } = otherPortfolio;
  return (
    <Wrapper>
      <Header>
        <Link to='/main'>뒤로가기</Link>
        <h3>아티스트 탐색</h3>
        <div></div>
      </Header>
      <ArtistBgImg backgroundImage={backgroundImageURL}></ArtistBgImg>
      <ArtistInfo>
        <ArtistProfileImg profileImage={profileImageURL}></ArtistProfileImg>
        <h3>{name}</h3>
        <div>{phoneNumber}</div>
        <div>{email}</div>
      </ArtistInfo>
      <PortfolioList>
        {!portfolios && <p>loading...</p>}
        {portfolios &&
          (portfolios.length === 0 ? (
            <p>개인 포트폴리오를 추가해보세요!</p>
          ) : (
            portfolios.map((portfolio) => (
              <li key={portfolio._id} image={portfolio.images[0].image}>
                <Link
                  css={css`
                    display: block;
                    width: 100%;
                    height: 100%;
                  `}
                  to={`/specificPortfolio/${artistAuth_id}/${portfolio._id}`}
                  state={{ profileImageURL, artistName: name }}
                />
              </li>
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
  width: 100vw;
  min-height: 100vh;
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
const ArtistBgImg = styled.div`
  width: 100vw;
  height: 220px;
  background: lightgray;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const ArtistProfileImg = styled.div`
  position: absolute;
  left: calc(50vw - 53px);
  bottom: calc(185px - 53px);
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background: lightgreen;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const ArtistInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 185px;
  flex-direction: column;
  justify-content: flex-end;
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
  box-sizing: border-box;
  & > p {
    margin: 30px auto 0;
  }
  & > li {
    list-style: none;
    width: 167px;
    height: 167px;
    background-color: lightgreen;
    background-image: url(${({ image }) => image});
    border-radius: 15px;
  }
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
export default OtherProfile;
