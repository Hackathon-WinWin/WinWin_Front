/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ApplyForm = ({ artistInfo, onApply }) => {
  if (!artistInfo) return null;
  const {
    name,
    birthday,
    address,
    phoneNumber,
    email,
    hotelName,
    recruitmentTitle,
  } = artistInfo;
  const calcAge = () => {
    const today = new Date();
    const birth = new Date(birthday);
    return today.getFullYear() - birth.getFullYear() + 1;
  };
  return (
    <form css={Form} onSubmit={onApply}>
      <Header>
        <Link
          to={-1}
          css={css`
            color: white;
            text-decoration: none;
          `}
        >
          X
        </Link>
        <h3>지원서 작성</h3>
        <button>완료</button>
      </Header>
      <div css={FlexColumn}>
        <div css={FlexColumn}>
          <FormTitle>담당자 정보</FormTitle>
          <WhiteBox>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/person.png'}
                alt='icon'
              />
              <p>
                <span>{name}</span>
                <span>
                  {calcAge()}세/
                  {address}
                </span>
              </p>
            </div>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/phone.png'}
                alt='icon'
              />
              <p>{phoneNumber}</p>
            </div>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/phone.png'}
                alt='icon'
              />
              <p>{email}</p>
            </div>
          </WhiteBox>
        </div>
        <div css={FlexColumn}>
          <FormTitle>전시공고 확인</FormTitle>
          <WhiteBox>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/person.png'}
                alt='icon'
              />
              <p>
                <span>{name}</span>
                <span>
                  {calcAge()}세/
                  {address}
                </span>
              </p>
            </div>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/phone.png'}
                alt='icon'
              />
              <p>{phoneNumber}</p>
            </div>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/phone.png'}
                alt='icon'
              />
              <p>{email}</p>
            </div>
          </WhiteBox>
        </div>
        <div css={FlexColumn}>
          <FormTitle>전시공고 확인</FormTitle>
          <WhiteBox></WhiteBox>
        </div>
      </div>
    </form>
  );
};
const Form = css`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid lightgray;
  background-color: #181818;
  & > h3 {
    color: white;
    align-self: center;
    justify-self: center;
  }
  & > button {
    color: white;
    background: none;
    border: none;
    width: fit-content;
    justify-self: flex-end;
  }
`;
const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  height: 48px;
  width: 100%;
`;
const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;
const InfoItem = css`
  display: flex;
  & > span {
    width: 80px;
  }
  & + & {
    margin-top: 16px;
  }
`;
const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const Icon = styled.img`
  object-fit: contain;
`;
export default ApplyForm;
