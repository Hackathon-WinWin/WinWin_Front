/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import styled from 'styled-components';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import { Box } from '@material-ui/core';
import { Input, InputAdornment } from '@mui/material';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const AddRecruit = ({
  form,
  onAddRecruit,
  onChange,
  onChangExStartDate,
  onChangExEndDate,
  onChangAppStartDate,
  onChangAppEndDate,
}) => {
  const imageRef = useRef([]);
  const handleOnChangeFiles = (e) => {
    onChange(e);
    const {
      target: { files, id },
    } = e;
    if ([...files].length > 0) {
      const reader = new FileReader();
      const previewImg = files[0];
      reader.readAsDataURL(previewImg);
      reader.onloadend = () => {
        imageRef.current[id].style.backgroundImage = `url(${reader.result})`;
      };
    }
  };
  return (
    <AddRecruitWrapper onSubmit={onAddRecruit}>
      <Header>
        <Link to='../recruit' style={{ color: 'white' }}>
          x
        </Link>
        <h3>모집공고 관리</h3>
        <button>완료</button>
      </Header>
      <RecruitForm>
        <FormBox>
          <FormTitle>전시 정보 입력</FormTitle>
          <InputBox>
            <Box css={BoxStyle}>
              <h4>신청기간</h4>
              <MobileDatePicker
                label='시작날짜'
                inputFormat='yyyy-MM-dd'
                value={form.applicationStartDate}
                onChange={onChangAppStartDate}
                renderInput={(params) => <TextField {...params} />}
              />
              <span>-</span>
              <MobileDatePicker
                label='종료날짜'
                inputFormat='yyyy-MM-dd'
                value={form.applicationEndDate}
                onChange={onChangAppEndDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box css={BoxStyle}>
              <h4>전시기간</h4>
              <MobileDatePicker
                label='시작날짜'
                inputFormat='yyyy-MM-dd'
                value={form.exhibitionStartDate}
                onChange={onChangExStartDate}
                renderInput={(params) => <TextField {...params} />}
              />
              <span>-</span>
              <MobileDatePicker
                label='종료날짜'
                inputFormat='yyyy-MM-dd'
                value={form.exhibitionEndDate}
                onChange={onChangExEndDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4>전시공간</h4>
              <Input
                name='area'
                value={form.area}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position='end'>
                    m<sup>2</sup>
                  </InputAdornment>
                }
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </div>
            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4>모집인원</h4>
              <Input
                name='concept'
                value={form.concept}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position='end'>명</InputAdornment>
                }
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </div> */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4>전시컨셉</h4>
              <Input
                name='concept'
                value={form.concept}
                onChange={onChange}
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </div>
          </InputBox>
        </FormBox>
        <FormBox>
          <FormTitle>
            <span>공간사진 업로드</span>
            <span>*3장 필수</span>
          </FormTitle>
          <ImgInputBox>
            <ImgLabel ref={(ele) => (imageRef.current[0] = ele)}>
              <input
                style={{ display: 'none' }}
                id={0}
                type='file'
                name='images'
                onChange={handleOnChangeFiles}
                accept='image/*'
                required
              />
              +
            </ImgLabel>
            <ImgLabel ref={(ele) => (imageRef.current[1] = ele)}>
              <input
                style={{ display: 'none' }}
                id={1}
                type='file'
                name='images'
                onChange={handleOnChangeFiles}
                accept='image/*'
                required
              />
              +
            </ImgLabel>
            <ImgLabel ref={(ele) => (imageRef.current[2] = ele)}>
              <input
                style={{ display: 'none' }}
                id={2}
                type='file'
                name='images'
                onChange={handleOnChangeFiles}
                accept='image/*'
                required
              />
              +
            </ImgLabel>
          </ImgInputBox>
        </FormBox>
        <FormBox>
          <FormTitle>메시지 작성</FormTitle>
          <InputBox>
            <input
              name='title'
              value={form.title}
              onChange={onChange}
              placeholder='제목'
            />
            <input
              name='introduceText'
              value={form.introduceText}
              onChange={onChange}
              placeholder='소개'
            />
          </InputBox>
        </FormBox>
      </RecruitForm>
    </AddRecruitWrapper>
  );
};
const AddRecruitWrapper = styled.form`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  height: 60px;
  width: 100vw;
  & > h3 {
    color: white;
    width: fit-content;
    height: fit-content;
  }
`;
const RecruitForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormBox = styled.div`
  display: flex;
  flex-direction: column;
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
const ImgInputBox = styled.div`
  display: flex;
  padding: 10px;
`;
const ImgLabel = styled.label`
  cursor: pointer;
  background: #181818;
  border: none;
  border-radius: 10px;
  width: 106px;
  height: 106px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const InputBox = styled.div``;
const BoxStyle = css`
  display: flex;
  align-items: center;
  & .muioutlinedinput-root {
    height: 30px;
    width: fit-content;
  }
`;
export default AddRecruit;
