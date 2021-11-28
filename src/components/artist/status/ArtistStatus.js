/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import ArtistSendStatus from './ArtistSendStatus';
import ArtistReceiveStatus from './ArtistReceiveStatus';
import styled from 'styled-components';

const ArtistStatus = ({ artistStatus }) => {
  const { pathname } = useLocation();

  if (!artistStatus) return null;
  const { sent, recieved } = artistStatus;
  const len = pathname.split('/').length;
  console.log(artistStatus);
  return (
    <div>
      <Header>
        <TopTitle>
          <h3>지원 현황</h3>
          <img
            src={process.env.PUBLIC_URL + '/icons/bell_b.svg'}
            alt='알림'
            css={css`
              position: absolute;
              right: 20px;
              top: 48px;
            `}
          />
        </TopTitle>
        <ul css={Tab}>
          <TabItem active={len === 2}>
            <StyledLink to='.' active={len === 2}>
              내가 보낸 신청
            </StyledLink>
          </TabItem>
          <TabItem active={len === 3}>
            <StyledLink to='receive' active={len === 3}>
              내가 받은 제안
            </StyledLink>
          </TabItem>
        </ul>
      </Header>
      <Routes>
        <Route index element={<ArtistSendStatus sent={sent} />} />
        <Route
          path=':name'
          element={<ArtistReceiveStatus recieved={recieved} />}
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
  height: 136px;
`;
const TopTitle = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 90px;
  text-align: center;
  padding-top: 51px;
  box-sizing: border-box;
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
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.314367px;
  color: ${({ active }) => (active ? '#181818' : '#bcbcbc')};
  text-decoration: none;
`;
export default ArtistStatus;
