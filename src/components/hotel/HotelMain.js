import React from 'react';
import styled from 'styled-components';

const HotelMain = ({ artistProfiles }) => {
  if (!artistProfiles) return null;
  return (
    <MainWrapper>
      <MainImage></MainImage>
      <SearchBox>
        <input style={{ border: 'none', width: '80%', height: '100%' }} />
      </SearchBox>

      <div>
        <p>마음에 드는 아티스트를 찾아보세요.</p>
      </div>
      <MainPortfoilo>
        <ul>
          {!artistProfiles && <p>loading...</p>}
          {artistProfiles === [] ? (
            <p>loading...</p>
          ) : (
            artistProfiles.map((portfolio, index) => (
              <li
                key={index}
                image={
                  portfolio.portfolio.images.length === 0
                    ? null
                    : portfolio.portfolio.images[0].image
                }
              >
                <div>
                  <h3>{portfolio.portfolio.title}</h3>
                  <ul>
                    {portfolio.hashTag &&
                      portfolio.hashTag.length !== 0 &&
                      portfolio.hashTag.map((tag, index) => (
                        <li key={index}>{`# ${tag.tagName}`}</li>
                      ))}
                  </ul>
                </div>
              </li>
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
const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  position: absolute;
  width: 342px;
  height: 48px;
  border-radius: 24px;
  top: 107px;
  left: calc(50vw - 171px);
`;
const MainImage = styled.div`
  height: 322px;
  background-color: lightgray;
`;
const MainPortfoilo = styled.div`
  padding: 0 16px;
  & > ul {
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
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-shrink: 0;
      scroll-snap-align: start; /* latest (Chrome 69+) */
      scroll-snap-coordinate: 0% 0%; /* older (Firefox/IE) */
      -webkit-scroll-snap-coordinate: 0% 0%; /* older (Safari) */
      overflow: hidden;
      box-sizing: border-box;

      width: 208px;
      height: 274px;
      margin: 16px 0;
      padding: 16px;
      list-style: none;
      background-color: red;
      /* background-image: url(${({ image }) => image}); */
      background-repeat: no-repeat;
      background-size: cover;
      scroll-snap-align: start;
      margin-left: 16px;
      border-radius: 10px;
    }
  }
`;

export default HotelMain;
