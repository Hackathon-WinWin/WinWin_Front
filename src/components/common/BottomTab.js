/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BottomTab = ({ isArtist }) => {
  const activeStyle = {};
  const onActive = ({ isActive }) => {
    console.log(isActive);
  };
  return (
    <BottomTabWrapper>
      <Tab>
        <StyledLink to="/main" style={onActive}>
          <img
            src={process.env.PUBLIC_URL + '/icons/tap_home.svg'}
            alt="home"
          />
          <ActiveYellow />
        </StyledLink>
      </Tab>
      <Tab>
        {isArtist ? (
          <StyledLink to="/community" style={onActive}>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_community.svg'}
              alt="commu"
            />
          </StyledLink>
        ) : (
          <StyledLink to="/recruit" style={onActive}>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_write.svg'}
              alt="wrtie"
            />
          </StyledLink>
        )}
      </Tab>
      <Tab>
        {isArtist ? (
          <StyledLink to="/applyStatus" style={onActive}>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_heart.svg'}
              alt="status"
            />
          </StyledLink>
        ) : (
          <StyledLink to="/recruitStatus" style={onActive}>
            <img
              src={process.env.PUBLIC_URL + '/icons/tap_heart.svg'}
              alt="status"
            />
          </StyledLink>
        )}
      </Tab>
      <Tab>
        {isArtist ? (
          <StyledLink to="/artistMyPage" style={onActive}>
            <img src={process.env.PUBLIC_URL + '/icons/tap_my.svg'} alt="my" />
          </StyledLink>
        ) : (
          <StyledLink to="/hotelMyPage" style={onActive}>
            <img src={process.env.PUBLIC_URL + '/icons/tap_my.svg'} alt="my" />
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
  border-top: 1px solid lightgray;
  background-color: white;
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
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const ActiveYellow = styled.div`
  position: absolute;
  background: #faff00;
  width: 38px;
  height: 38px;
  left: 30px;
  top: 788px;
  border-radius: 50%;
`;
export default BottomTab;
