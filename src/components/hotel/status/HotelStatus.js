/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HotelSendStatus from './HotelSendStatus';
import HotelReveiveStatus from './HotelReveiveStatus';

const HotelStatus = ({ hotelStatus }) => {
  const { pathname } = useLocation();

  if (!hotelStatus) return null;
  const { sent, recieved } = hotelStatus;
  const len = pathname.split('/').length;
  return (
    <div>
      <Header>
        <TopTitle>
          <h3>제안현황</h3>
          <img
            src={process.env.PUBLIC_URL + '/icons/bell_b.svg'}
            alt='알림'
            css={css`
              position: absolute;
              right: 16px;
              top: 16px;
            `}
          />
        </TopTitle>
        <ul css={Tab}>
          <TabItem active={len === 2}>
            <StyledLink to='.' active={len === 2}>
              내가 보낸 제안
            </StyledLink>
          </TabItem>
          <TabItem active={len === 3}>
            <StyledLink to='receive' active={len === 3}>
              내가 받은 신청
            </StyledLink>
          </TabItem>
        </ul>
      </Header>
      <Routes>
        <Route index element={<HotelSendStatus sent={sent} />} />
        <Route
          path=':name'
          element={<HotelReveiveStatus recieved={recieved} />}
        />
      </Routes>
    </div>
  );
};

const Header = styled.header`
  background-color: white;
  position: sticky;
  top: 0;
  width: 100vw;
  height: 106px;
`;
const TopTitle = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tab = css`
  display: flex;
  height: 46px;
  border-bottom: 1px solid lightgray;
`;
const TabItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
  color: #bcbcbc;
  & + & {
    border-left: 1px solid lightgray;
  }
  border-bottom: ${({ active }) => active && '3px solid #181818'};
`;
const StyledLink = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? '#181818' : '#BCBCBC')};
  text-decoration: none;
`;
export default HotelStatus;
