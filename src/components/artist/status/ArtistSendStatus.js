/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

const ArtistSendStatus = ({ sent }) => {
  return (
    <Wrapper>
      {sent.map((item) => (
        <li key={item._id} css={SentItem}>
          <div className='top'>
            <h3>{item.hotelName}</h3>
            <Status>
              {item.checked ? (
                <p>{dayjs(item.checkedDate).format('YY.MM.DD')}</p>
              ) : (
                <p>미열람</p>
              )}
              <Check check={item.checked} />
            </Status>
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
const SentItem = css`
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
const Status = styled.div`
  display: flex;
  align-items: center;
`;
const Check = styled.span`
  margin-left: 10px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${(props) => (props.check ? '#67E253' : '#FF1F1F')};
`;
export default ArtistSendStatus;
