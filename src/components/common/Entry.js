import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Entry = ({ form, onChange, onSubmit }) => {
  return (
    <Container>
      <LogoText>WinWin</LogoText>
      <form onSubmit={onSubmit}>
        <InputId
          name="account"
          value={form.account}
          placeholder="  아이디"
          onChange={onChange}
        />
        <InputPassword
          name="password"
          value={form.password}
          placeholder="  비밀번호"
          onChange={onChange}
          type="password"
        />
        <LoginButton>로그인</LoginButton>
      </form>
      <FindAuth to="/signup">아이디 비밀번호 찾기</FindAuth>
      <Bar></Bar>
      <CreateAuth to="/signup">회원가입</CreateAuth>
    </Container>
  );
};
const Container = styled.form`
  height: 844px;
  width: 390px;
  background-color: #181818;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 100;
`;

const LogoText = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 283px;
  left: 116px;
  width: 160px;
  height: 80.69px;
  color: #faff00;
  font-size: 45.37px;
`;

const InputId = styled.input`
  position: absolute;
  top: 541px;
  left: 65px;
  width: 260px;
  height: 40px;
  background-color: white;
  border: none;
  border-bottom: 1px solid #181818;
  border-radius: 4px 4px 0 0;
`;

const InputPassword = styled.input`
  position: absolute;
  top: 580px;
  left: 65px;
  width: 260px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  border-top: 1px solid #181818;
  border-radius: 0 0 4px 4px;
`;

const LoginButton = styled.button`
  position: absolute;
  top: 634px;
  left: 65px;
  width: 260px;
  height: 40px;
  background-color: #faff00;
  margin-top: 14px;
  border: none;
  border-radius: 4px;
  font-weight: 400;
`;

const FindAuth = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 708px;
  left: 117px;
  width: 93px;
  height: 20px;
  font-size: 10px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 400;
`;

const CreateAuth = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 708px;
  left: 234px;
  width: 39px;
  height: 20px;
  font-size: 10px;
  color: #ffffff;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 400;
`;

const Bar = styled.p`
  position: absolute;
  top: 712px;
  left: 222px;
  width: 0px;
  height: 12px;
  color: #ffffff;
  border-right: 1px solid #ffffff;
`;
export default Entry;
