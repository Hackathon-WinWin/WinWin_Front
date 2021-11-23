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
          <IoArrowBack size='30' />
        </button>
        <button style={{ background: 'none', border: 'none' }}>완료</button>
      </Header>
      <PreviewBox ref={previewRef} />
      <InputBox>
        <label>
          제목
          <input name='title' value={form.title} onChange={onChange} />
        </label>
        <label>
          설명 입력...
          <TextArea
            placeholder='설명을 써보세요!'
            name='introduceText'
            value={form.introduceText}
            onChange={onChange}
          />
        </label>
        <label>
          링크 삽입
          <input name='link' value={form.link} onChange={onChange} />
        </label>
      </InputBox>
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
const TextArea = styled.textarea`
  border: none;
  width: 100vw;
  height: 50px;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const PreviewBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid lightgray;
`;
export default DetailPortfolio;
