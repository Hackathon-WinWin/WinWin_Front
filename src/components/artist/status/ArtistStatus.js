/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ArtistSendStatus from './ArtistSendStatus';
import ArtistReceiveStatus from './ArtistReceiveStatus';
import styled from 'styled-components';

const ArtistStatus = ({ artistStatus }) => {
  if (!artistStatus) return null;
  const { sent, recieved } = artistStatus;
  return (
    <div>
      <Header>
        <TopTitle></TopTitle>
        <ul css={Tab}>
          <li css={TabItem}>
            <Link to='.' css={LinkCss}>
              내가 보낸 신청
            </Link>
          </li>
          <li css={TabItem}>
            <Link to='receive' css={LinkCss}>
              내가 받은 제안
            </Link>
          </li>
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
  height: 106px;
`;
const TopTitle = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 60px;
`;
const Tab = css`
  display: flex;
  height: 46px;
  border-bottom: 1px solid lightgray;
`;
const TabItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;

  & + & {
    border-left: 1px solid lightgray;
  }
`;
const LinkCss = css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export default ArtistStatus;
