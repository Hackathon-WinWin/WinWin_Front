import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BottomTab = ({ isArtist }) => {
  const onActive = ({ isActive }) => ({ color: isActive ? 'red' : 'black' });
  return (
    <BottomTabWrapper>
      <Tab>
        <NavLink to='/main' style={onActive}>
          메인
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/community' style={onActive}>
          커뮤니티
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/applystatus' style={onActive}>
          지원현황
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/myPage' style={onActive}>
          마이페이지
        </NavLink>
      </Tab>
    </BottomTabWrapper>
  );
};
const BottomTabWrapper = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 60px;
  border-top: 1px solid lightgray;
  background-color: white;
`;
const Tab = styled.li`
  list-style: none;
  width: 100%;
  & + & {
    border-left: 1px solid lightgray;
  }
`;

export default BottomTab;
