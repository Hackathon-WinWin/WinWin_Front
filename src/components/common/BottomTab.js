import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BottomTab = ({ isArtist }) => {
  return (
    <BottomTabWrapper>
      <Tab>
        <StyledLink to='/main'>
          <img
            src={process.env.PUBLIC_URL + '/icons/tap_home.svg'}
            alt='home'
          />
          <div></div>
        </StyledLink>
      </Tab>
      <Tab>
        {isArtist ? (
          <StyledLink to='/community'>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_community.svg'}
              alt='community'
            />
            <div></div>
          </StyledLink>
        ) : (
          <StyledLink to='/recruit'>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_write.svg'}
              alt='wrtie'
            />
            <div></div>
          </StyledLink>
        )}
      </Tab>
      <Tab>
        {isArtist ? (
          <StyledLink to='/applyStatus'>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_heart.svg'}
              alt='status'
            />
            <div></div>
          </StyledLink>
        ) : (
          <StyledLink to='/recruitStatus'>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_heart.svg'}
              alt='status'
            />
            <div></div>
          </StyledLink>
        )}
      </Tab>
      <Tab>
        {isArtist ? (
          <StyledLink to='/artistMyPage'>
            <img src={process.env.PUBLIC_URL + '/icons/tap_my.svg'} alt='my' />
            <div></div>
            <div></div>
          </StyledLink>
        ) : (
          <StyledLink to='/hotelMyPage'>
            <img src={process.env.PUBLIC_URL + '/icons/tap_my.svg'} alt='my' />
            <div></div>
          </StyledLink>
        )}
      </Tab>
    </BottomTabWrapper>
  );
};
const BottomTabWrapper = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 84px;
  background-color: white;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.18);
`;
const Tab = styled.li`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  & > img {
    z-index: 99;
  }
  &.active > div {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #faff00;
    position: fixed;
    bottom: 18px;
  }
`;
export default BottomTab;
