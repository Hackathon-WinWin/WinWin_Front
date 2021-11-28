/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProposeForm = ({
  hotelInfo,
  myRecuitementList,
  form,
  onChange,
  onPropose,
}) => {
  if (!hotelInfo || !myRecuitementList) return null;
  const { phoneNumber, email } = hotelInfo;
  const { recruitments } = myRecuitementList;
  return (
    <>
      <form css={Form} onSubmit={onPropose}>
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
          <h3
            css={css`
              font-style: normal;
              font-weight: bold;
              font-size: 18px;
              line-height: 10px;
            `}
          >
            제안서 작성
          </h3>
          <button
            css={css`
              position: absolute;
              right: 16px;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 10px;
            `}
          >
            완료
          </button>
        </Header>
        <div css={FlexColumn}>
          <div css={FlexColumn}>
            <FormTitle>담당자 정보</FormTitle>
            <WhiteBox>
              <div css={Info}>
                <span>전화</span>
                <p>{phoneNumber}</p>
              </div>
              <div css={Info}>
                <span>메일</span>
                <p>{email}</p>
              </div>
            </WhiteBox>
          </div>
          <div css={FlexColumn}>
            <FormTitle>전시공고 선택</FormTitle>
            <WhiteBox>
              {recruitments.length === 0 ? (
                <p>
                  선택할 모집 공고가 없습니다.
                  <br />
                  모집 공고를 올려보세요!
                </p>
              ) : (
                <FormControl component='fieldset'>
                  <RadioGroup aria-label='gender'>
                    {recruitments.map((recruitment) => (
                      <FormControlLabel
                        key={recruitment._id}
                        name='recruitment_id'
                        value={recruitment._id}
                        control={<BpRadio />}
                        label={recruitment.title}
                        onChange={onChange}
                        labelPlacement='start'
                        css={FormControlLabelStyle}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            </WhiteBox>
          </div>
          <div css={FlexColumn}>
            <FormTitle>메세지 작성</FormTitle>
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
                placeholder='아티스트에게 전하고 싶은 메시지를 적어주세요.'
              />
            </WhiteBox>
          </div>
        </div>
      </form>
    </>
  );
};

// ### Material UI styling ###
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 10,
  height: 10,
  border: '1px solid lightgray',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
  },
}));
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#181818',
  '&:before': {
    display: 'block',
    width: 5,
    height: 5,
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#181818',
  },
});
function BpRadio(props) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color='default'
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

// ### Form ###
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
const Info = css`
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
const FormControlLabelStyle = css`
  &.MuiFormControlLabel-root {
    margin: 0;
    justify-content: space-between;
    padding: 16px 0;
  }
  & + & {
    border-top: 1px solid lightgray;
  }
`;
export default ProposeForm;
