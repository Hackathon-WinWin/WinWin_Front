import React from 'react';
import styled from 'styled-components';

const ArtistSignup = ({
  checkPassword,
  form,
  onChange,
  onSubmit,
  onCheckAccount,
  error,
}) => {
  const { isError, message } = error;
  const { formError, formMessage } = checkPassword;
  return (
    <Container>
      <Title>회원가입</Title>
      <Subtitle>아이디와 비밀번호를 설정해주세요.</Subtitle>
      <form onSubmit={onSubmit}>
        <P1>ID</P1>
        <Input1
          onBlur={onCheckAccount}
          name="account"
          value={form.account}
          onChange={onChange}
          placeholder=""
        />
        <IdError>{isError && message}</IdError>
        <IdSuccess>{!isError && message}</IdSuccess>
        <P2>비밀번호</P2>
        <Input2
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder=""
          type="password"
        />
        <P3>비밀번호 확인</P3>
        <Input3
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={onChange}
          placeholder=""
          type="password"
        />
        <PasswordSuccess>{formError && formMessage}</PasswordSuccess>
        <PasswordError>{!formError && formMessage}</PasswordError>
        <SubmitBtn disabled={isError || !formError}>다음</SubmitBtn>
      </form>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 100;
`;

const Title = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 80px;
  left: 20px;
  width: 118px;
  height: 28px;
  color: #000000;
  font-size: 32px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 118px;
  left: 20px;
  width: 175px;
  height: 28px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

const P1 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 238px;
  left: 20px;
  width: 15px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

const P2 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 383px;
  left: 20px;
  width: 54px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

const P3 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 476px;
  left: 20px;
  width: 84px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

const IdSuccess = styled.p`
  position: absolute;
  display: flex;
  top: 319px;
  left: 20px;
  width: 100%;
  height: 16px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

const IdError = styled.p`
  position: absolute;
  display: flex;
  top: 319px;
  left: 20px;
  width: 100%;
  height: 16px;
  color: #ff1212;
  font-size: 12px;
  font-weight: 400;
`;

const PasswordSuccess = styled.p`
  position: absolute;
  display: flex;
  top: 557px;
  left: 20px;
  width: 100%;
  height: 16px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

const PasswordError = styled.p`
  position: absolute;
  display: flex;
  top: 557px;
  left: 20px;
  width: 100%;
  height: 16px;
  color: #ff1212;
  font-size: 12px;
  font-weight: 400;
`;

const Input1 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 259px;
  left: 20px;
  width: 350px;
  height: 50px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: 500;
`;

const Input2 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 404px;
  left: 20px;
  width: 350px;
  height: 50px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const Input3 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 497px;
  left: 20px;
  width: 350px;
  height: 50px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const SubmitBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0px;
  width: 100vw;
  height: 75px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? '#c1c1c1' : '#181818')};
  transition: 0.5s;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export default ArtistSignup;
