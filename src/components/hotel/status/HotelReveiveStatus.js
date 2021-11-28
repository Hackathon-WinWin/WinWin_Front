/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

const HotelReveiveStatus = ({ recieved }) => {
  return (
    <Wrapper>
      {recieved.map((item) => (
        <li key={item._id} css={RecievedItem}>
          <div className='top'>
            <h3>{item.nickname}</h3>
            <span>{dayjs(item.writtenTime).format('MM.DD ddd A hh:mm')}</span>
          </div>
          <p>{item.recruitmentTitle}</p>
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
  border-bottom: 1px solid lightgray;
  & > .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export default HotelReveiveStatus;
