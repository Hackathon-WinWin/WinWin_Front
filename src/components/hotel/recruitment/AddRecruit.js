/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import styled from 'styled-components';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import { Box } from '@material-ui/core';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const AddRecruit = ({
  form,
  onAddRecruit,
  onChange,
  onChangExhibitDate,
  onChangeAppDate,
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
        <Link
          to='../recruit'
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
        <h3>모집공고 관리</h3>
        <button>완료</button>
      </Header>
      <RecruitForm>
        <FormBox>
          <FormTitle>전시 정보 입력</FormTitle>
          <InputBox>
            <Box css={BoxStyle}>
              <h4>신청기간</h4>
              <MobileDateRangePicker
                inputFormat='yyyy-MM-dd'
                value={[form.applicationStartDate, form.applicationEndDate]}
                onChange={(newValue) => {
                  onChangeAppDate(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <DateInput
                      ref={startProps.ref}
                      {...startProps.inputProps}
                    />
                    <Box sx={{ mx: 2 }}> - </Box>
                    <DateInput ref={endProps.ref} {...endProps.inputProps} />
                  </React.Fragment>
                )}
              />
            </Box>
            <Box css={BoxStyle}>
              <h4>전시기간</h4>
              <MobileDateRangePicker
                inputFormat='yyyy-MM-dd'
                value={[form.exhibitionStartDate, form.exhibitionEndDate]}
                onChange={(newValue) => {
                  onChangExhibitDate(newValue);
                }}
                renderInput={(startProps, endProps) => {
                  console.log(startProps, endProps);
                  return (
                    <React.Fragment>
                      <DateInput
                        ref={startProps.ref}
                        {...startProps.inputProps}
                      />
                      <Box sx={{ mx: 2 }}> - </Box>
                      <DateInput ref={endProps.ref} {...endProps.inputProps} />
                    </React.Fragment>
                  );
                }}
              />
            </Box>
            <Box css={BoxStyle}>
              <h4>전시공간</h4>
              <InputShape>
                <input name='area' value={form.area} onChange={onChange} />
                <span className='adornment'>
                  m<sup>2</sup>
                </span>
              </InputShape>
            </Box>
            <Box css={BoxStyle}>
              <h4>모집인원</h4>
              <InputShape>
                <input
                  name='recruitNumber'
                  value={form.recruitNumber}
                  onChange={onChange}
                />
                <span className='adornment'>명</span>
              </InputShape>
            </Box>
            <Box css={BoxStyle}>
              <h4>전시컨셉</h4>
              <InputShape>
                <input
                  name='concept'
                  value={form.concept}
                  onChange={onChange}
                />
              </InputShape>
            </Box>
          </InputBox>
        </FormBox>
        <FormBox>
          <FormTitle>
            <span>공간사진 업로드</span>
            <span className='right'>*3장 필수</span>
          </FormTitle>
          <ImgInputBox>
            <ImgLabel id='image1' ref={(ele) => (imageRef.current[0] = ele)}>
              <span>+</span>
              <input
                style={{ display: 'none' }}
                for='image1'
                id={0}
                type='file'
                name='images'
                onChange={handleOnChangeFiles}
                accept='image/*'
                required
              />
            </ImgLabel>
            <ImgLabel id='image2' ref={(ele) => (imageRef.current[1] = ele)}>
              <span>+</span>
              <input
                style={{ display: 'none' }}
                id={1}
                for='image2'
                type='file'
                name='images'
                onChange={handleOnChangeFiles}
                accept='image/*'
                required
              />
            </ImgLabel>
            <ImgLabel id='image3' ref={(ele) => (imageRef.current[2] = ele)}>
              <span>+</span>
              <input
                style={{ display: 'none' }}
                for='image3'
                id={2}
                type='file'
                name='images'
                onChange={handleOnChangeFiles}
                accept='image/*'
                required
              />
            </ImgLabel>
          </ImgInputBox>
        </FormBox>
        <FormBox>
          <FormTitle>메시지 작성</FormTitle>
          <InputBox>
            <TitleInput
              name='title'
              value={form.title}
              onChange={onChange}
              placeholder='제목을 입력하세요.'
            />
            <TextArea
              name='introduceText'
              value={form.introduceText}
              onChange={onChange}
              placeholder='전하고 싶은 메시지를 적어주세요.'
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
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #181818;
  & > span.right {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.8;
  }
`;
const ImgInputBox = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;
const ImgLabel = styled.label`
  cursor: pointer;
  border: none;
  width: 106px;
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #181818;
  opacity: 0.1;
  border-radius: 15px;
  & > span {
    font-style: normal;
    font-weight: 300;
    font-size: 44px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    color: #181818;
    opacity: 0.3;
    z-index: 99;
  }
`;

const BoxStyle = css`
  display: flex;
  align-items: center;
  gap: 25px;
  & .muioutlinedinput-root {
    height: 30px;
    width: fit-content;
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  gap: 15px;
  flex: auto;
`;
const TitleInput = styled.input`
  height: 50px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
const TextArea = styled.textarea`
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
const InputShape = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75px;
  padding: 5px;
  border-bottom: 1px solid #c4c4c4;
  & > input {
    width: 50px;
    border: none;
  }
  & > span.adornment {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #181818;
    opacity: 0.5;
  }
`;
const DateInput = styled.input`
  border: none;
  border-bottom: 1px solid #c4c4c4;
  padding: 5px;
  width: 75px;
  text-align: center;
  ::placeholder {
    text-align: center;
  }
`;
export default AddRecruit;
