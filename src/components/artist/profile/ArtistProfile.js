import React from 'react';
import styled from 'styled-components';
const ArtistProfile = ({ form, dupNickname, dupEmail, onChange, onSubmit }) => {
  const { isDupNickname, nicknameMessage } = dupNickname;
  const { isDupEmail, emailMessage } = dupEmail;
  return (
    <Container>
      <TitleContainer>
        <Title>프로필 설정</Title>
        <Subtitle>
          호텔과 다른 아티스트들에게 보여질 프로필을 만드세요.
        </Subtitle>
      </TitleContainer>
      <Form onSubmit={onSubmit}>
        <Label className='message'>
          <p>닉네임</p>
          <Input name='nickname' value={form.nickname} onChange={onChange} />
          <ErrorMessage>{isDupNickname && nicknameMessage}</ErrorMessage>
          <SuccessMessage>{!isDupNickname && nicknameMessage}</SuccessMessage>
        </Label>
        <Label>
          <p>이름</p>
          <Input name='name' value={form.name} onChange={onChange} />
        </Label>
        <Label>
          <p>생년월일</p>
          <Input name='birthday' value={form.birthday} onChange={onChange} />
        </Label>
        <Label>
          <p>거주지역</p>
          <Input name='address' value={form.address} onChange={onChange} />
        </Label>
        <Label className='message'>
          <p>메일</p>
          <Input
            name='email'
            value={form.email}
            onChange={onChange}
            type='email'
          />
          <SuccessMessage>{isDupEmail && emailMessage}</SuccessMessage>
          <ErrorMessage>{!isDupEmail && emailMessage}</ErrorMessage>
        </Label>
        <Label>
          <TextAreaTitle>
            <span>소개</span>
            <span className='gray'>최대 40자</span>
          </TextAreaTitle>
          <IntroduceTextArea
            name='introduceText'
            value={form.introduceText}
            onChange={onChange}
          />
        </Label>
        <SubmitBtn>다음</SubmitBtn>
      </Form>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  font-weight: 100;
`;
const TitleContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #ffffff;
  width: 100vw;
  height: 144px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Title = styled.p`
  color: #000000;
  font-size: 32px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  margin-top: 96px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const Label = styled.label`
  width: 100%;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 32px;
  .message {
    height: 88px;
  }
`;
const Input = styled.input`
  height: 40px;
  width: 100%;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: 500;
`;
const TextAreaTitle = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & > .gray {
    color: rgba(146, 146, 146, 1);
  }
`;
const ErrorMessage = styled.div`
  margin-top: 10px;
  width: 100vw;
  font-size: 12px;
  font-weight: 400;
  color: #ff1212;
`;
const SuccessMessage = styled.div`
  margin-top: 5px;
  width: 100vw;
  font-size: 12px;
  font-weight: 400;
  color: #000000;
`;
const IntroduceTextArea = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 125px;
  border-radius: 10px;
  background-color: #f3f3f3;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  padding: 13px;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 75px;
  border: none;
  background-color: #181818;
  transition: 0.5s;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export default ArtistProfile;
