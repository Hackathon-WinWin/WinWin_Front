/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArtistMain = ({ hotelList }) => {
  if (!hotelList) return null;
  return (
    <MainWrapper>
      <Gradient />
      <MainImage url={process.env.PUBLIC_URL + '/assets/mainpage_image.png'}>
        <Header>
          <Menu>
            <img
              src={process.env.PUBLIC_URL + '/icons/bookmark_line_w.svg'}
              alt="bookmark"
            />
            <img
              src={process.env.PUBLIC_URL + '/icons/bell_w.svg'}
              alt="bell"
            />
          </Menu>
          <SearchBox>
            <img
              src={process.env.PUBLIC_URL + '/icons/search.svg'}
              alt="search"
            />
            <SearchInput placeholder="전시공간 검색" />
            <img
              src={process.env.PUBLIC_URL + '/icons/filter.svg'}
              alt="filter"
            />
          </SearchBox>
        </Header>
      </MainImage>

      <Intro>
        <p>당신의 꿈을 펼칠 공간을 찾아보세요.</p>
      </Intro>
      <MainPortfoilo>
        <ul>
          {hotelList.length === 0 ? (
            <p>등록된 호텔이 없습니다.</p>
          ) : (
            hotelList.map((hotel, index) => (
              <PortfolioItem
                key={index}
                image={
                  hotel.recruitment.images.length === 0
                    ? null
                    : hotel.recruitment.images[0].image
                }
              >
                <Link
                  to={`/specificRecruit/${hotel.hotelAuth_id}/${hotel.recruitment._id}`}
                  css={LinkCss}
                >
                  <HotelName>{hotel.hotelName}</HotelName>
                  <div>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + '/icons/location_w.svg'}
                        alt="loc"
                      />
                      &nbsp;&nbsp;
                      {hotel.address}
                    </p>
                    <p>{hotel.recruitment.title}</p>
                  </div>
                </Link>
              </PortfolioItem>
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
const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 189px;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 0) 18.23%,
    #181818 90.1%
  );
  transform: rotate(-180deg);
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
  justify-content: space-between;
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
  background-color: lightgray;
  background-image: url(${({ url }) => url});
`;
const Intro = styled.div`
  width: 100%;
  padding: 39px 16px;
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
    /* height: calc(100% - 80px); */
    overflow: auto;
    scroll-snap-type: x mandatory; /* Chrome Canary */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const PortfolioItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  scroll-snap-align: start; /* latest (Chrome 69+) */
  scroll-snap-coordinate: 0% 0%; /* older (Firefox/IE) */
  -webkit-scroll-snap-coordinate: 0% 0%; /* older (Safari) */
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 20px;

  width: 208px;
  height: 274px;
  padding: 21px 16px;
  list-style: none;
  background-color: lightgray;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  scroll-snap-align: start;
  border-radius: 10px;
  & p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #ffffff;
    margin-top: 10px;
  }
`;
const HotelName = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;

  color: #ffffff;

  text-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);
`;
const LinkCss = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  text-decoration: none;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
`;
export default ArtistMain;
