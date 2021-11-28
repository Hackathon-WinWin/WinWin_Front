/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ApplyForm = ({ form, artistInfo, onApply, onChange }) => {
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
            position: absolute;
            left: 16px;
          `}
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/x_w.svg'}
            alt='icon'
            style={{ width: '10.5px', height: '10.5px' }}
          />
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
                src={process.env.PUBLIC_URL + '/icons/person.svg'}
                alt='icon'
              />
              <p>
                <span>{name}</span>{' '}
                <span>
                  {calcAge()}세 /{address}
                </span>
              </p>
            </div>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/phone.svg'}
                alt='icon'
              />
              <p>{phoneNumber}</p>
            </div>
            <div css={InfoItem}>
              <Icon
                src={process.env.PUBLIC_URL + '/icons/mail.svg'}
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
              <span>호텔 정보</span>
              <p>{hotelName}</p>
            </div>
            <div css={InfoItem}>
              <span>전시 제목</span>
              <p>{recruitmentTitle}</p>
            </div>
          </WhiteBox>
        </div>
        <div css={FlexColumn}>
          <FormTitle>지원서 작성</FormTitle>
          <WhiteBox>
            <Input
              name='title'
              value={form.title}
              onChange={onChange}
              placeholder='제목을 입력하세요.'
            />
            <TextArea
              name='message'
              value={form.message}
              onChange={onChange}
              placeholder='지원동기, 질문, 전하고 싶은 메시지를 적어주세요.'
            />
          </WhiteBox>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid lightgray;
  background-color: #181818;
  & > h3 {
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 10px;
  }
  & > button {
    color: white;
    background: none;
    border: none;
    width: fit-content;
    justify-self: flex-end;
    position: absolute;
    right: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 10px;
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
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  & > span {
    width: 80px;
    font-weight: 500;
  }
  & + & {
    margin-top: 16px;
  }
`;
const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.5px;
`;
const Icon = styled.img`
  object-fit: contain;
  width: 19px;
  height: 19px;
  margin-right: 10px;
`;
const Input = styled.input`
  height: 50px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
const TextArea = styled.textarea`
  margin-top: 15px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
export default ApplyForm;
