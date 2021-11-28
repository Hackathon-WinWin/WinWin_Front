/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';

const DetailPortfolio = ({
  setOpenDetail,
  setForm,
  onChange,
  form,
  previewRef,
}) => {
  const onDismiss = (e) => {
    setOpenDetail(false);
  };
  useEffect(() => {
    return () => {
      setForm((state) => ({
        ...state,
        title: '',
        introduceText: '',
        link: '',
        images: [],
      }));
    };
  }, [setForm]);
  return (
    <DetailBox>
      <Header>
        <button
          style={{ background: 'none', border: 'none' }}
          onClick={onDismiss}
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/x_b.svg'}
            alt='close'
            style={{ color: 'black' }}
          />
        </button>
        <CompleteBtn>완료</CompleteBtn>
      </Header>
      <PreviewBox ref={previewRef} />
      <div css={InputBox}>
        <Label>
          제목
          <input name='title' value={form.title} onChange={onChange} />
        </Label>
        <Label>
          <TextArea
            placeholder='설명 입력...'
            name='introduceText'
            value={form.introduceText}
            onChange={onChange}
          />
        </Label>
        <Label>
          링크 삽입
          <input name='link' value={form.link} onChange={onChange} />
        </Label>
      </div>
    </DetailBox>
  );
};
const DetailBox = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 99;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  width: 100vw;
  height: 60px;
  padding: 0 16px;
  box-sizing: border-box;
`;
const CompleteBtn = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 10px;
  display: flex;
  align-items: center;
  letter-spacing: 0.314367px;
  color: #000000;
  background: none;
  border: none;
`;
const TextArea = styled.textarea`
  border: none;
  width: 100vw;
  height: 50px;
`;
const InputBox = css`
  display: flex;
  flex-direction: column;
  & + & {
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  }
`;
const PreviewBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid lightgray;
  margin: 16px;
`;
const Label = styled.label`
  display: flex;
  padding: 0 16px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #222222;
  opacity: 0.8;
`;
export default DetailPortfolio;
