/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const ArtistReceiveStatus = ({ recieved }) => {
  return (
    <Wrapper>
      {recieved.map((item) => (
        <li key={item._id} css={RecievedItem}>
          <div className='top'>
            <h3>{item.title}</h3>
            <span>{dayjs(item.writtenTime).format('MM.DD ddd A hh:mm')}</span>
          </div>
          <Message>{item.message}</Message>
        </li>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  width: 100vw;
  min-height: 100vh;
  height: auto;
`;
const RecievedItem = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 24px 16px;
  height: 115px;
  & > .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  & + & {
    border-top: 1px solid lightgray;
  }
`;
const Message = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default ArtistReceiveStatus;
