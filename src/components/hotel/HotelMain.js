/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HotelMain = ({ artistProfiles }) => {
  if (!artistProfiles) return null;
  return (
    <MainWrapper>
      <MainImage url={process.env.PUBLIC_URL + '/assets/hotel_main_img.svg'}>
        <Header>
          <Menu>
            <img
              src={process.env.PUBLIC_URL + '/icons/bell_w.svg'}
              alt='bell'
            />
          </Menu>
          <SearchBox>
            <img
              src={process.env.PUBLIC_URL + '/icons/search.svg'}
              alt='search'
            />
            <SearchInput placeholder='아티스트 검색' />
            <img
              src={process.env.PUBLIC_URL + '/icons/filter.svg'}
              alt='filter'
            />
          </SearchBox>
        </Header>
      </MainImage>

      <Intro>
        <p>마음에 드는 아티스트를 찾아보세요.</p>
      </Intro>

      <MainPortfoilo>
        <ul>
          {!artistProfiles && <p>loading...</p>}
          {artistProfiles.length === 0 ? (
            <p>아티스트의 프로필이 없습니다!</p>
          ) : (
            artistProfiles.map((portfolio, index) => (
              <MainPortfolioItem
                key={index}
                image={
                  portfolio.portfolio.images.length === 0
                    ? null
                    : portfolio.portfolio.images[0].image
                }
              >
                <div className='gradient' />
                <Link
                  css={LinkCss}
                  to={`../otherArtistProfile/${portfolio.artistAuth_id}`}
                >
                  <h3>{portfolio.portfolio.title}</h3>
                  <ul>
                    {portfolio.hashTag &&
                      portfolio.hashTag.length !== 0 &&
                      portfolio.hashTag.map((tag, index) => (
                        <li key={index}>{`#${tag.tagName}`}</li>
                      ))}
                  </ul>
                </Link>
              </MainPortfolioItem>
            ))
          )}
        </ul>
      </MainPortfoilo>
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 100vw;
  height: 189px;
`;
const Menu = styled.div`
  z-index: 99;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
`;
const SearchBox = styled.div`
  display: flex;
  padding: 0 16px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: absolute;
  min-width: 342px;
  max-width: 400px;
  height: 48px;
  border-radius: 24px;
  top: 107px;
  left: calc(50vw - 171px);
`;
const SearchInput = styled.input`
  border: none;
  width: 75%;
  height: 100%;
  ::placeholder {
    text-align: center;
  }
`;
const MainImage = styled.div`
  height: 322px;
  background-image: url(${({ url }) => url});
`;
const Intro = styled.div`
  width: 100%;
  padding: 39px 16px 29px 16px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: #000000;
  & > p {
    width: 204px;
  }
`;

const MainPortfoilo = styled.div`
  padding: 0 16px;
  flex: auto;
  & > ul {
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 100%;
    overflow: auto;
    scroll-snap-type: x mandatory; /* Chrome Canary */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const MainPortfolioItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  scroll-snap-align: start; /* latest (Chrome 69+) */
  scroll-snap-coordinate: 0% 0%; /* older (Firefox/IE) */
  -webkit-scroll-snap-coordinate: 0% 0%; /* older (Safari) */
  overflow: hidden;
  margin: 10px;

  width: 208px;
  height: 274px;
  padding: 21px 16px;
  box-sizing: border-box;
  list-style: none;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  scroll-snap-align: start;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.25));
  border-radius: 15px;

  & > div.gradient {
    position: absolute;
    width: 100%;
    height: 97px;
    bottom: 0;
    left: 0;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.25));
    background: linear-gradient(
      180deg,
      rgba(24, 24, 24, 0) 0%,
      rgba(24, 24, 24, 0.8) 100%
    );
    border-radius: 0px 0px 15px 15px;
  }
`;
const LinkCss = css`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  text-decoration: none;

  & > ul {
    display: flex;
    & > li {
      list-style: none;
      margin-right: 7px;
    }
  }
`;

export default HotelMain;
