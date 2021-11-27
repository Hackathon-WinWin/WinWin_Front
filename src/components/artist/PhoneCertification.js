import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PhoneCertification = ({
  form,
  onChange,
  onSubmitPhoneNumber,
  onCertify,
  requirePhoneSuccess,
}) => {
  return (
    <Container>
      <Title>전화번호 인증</Title>
      <Subtitle>회원가입을 위해 번호인증을 해주세요.</Subtitle>
      <form onSubmit={onSubmitPhoneNumber}>
        <P1>휴대전화 번호</P1>
        <Input1
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={onChange}
        />
        <Button1>인증번호 요청</Button1>
      </form>
      <form onSubmit={onCertify}>
        <P2>인증번호 입력</P2>
        <Input2
          name="certification"
          value={form.certification}
          onChange={onChange}
        />
        <Button2 disabled={requirePhoneSuccess === null}>다음</Button2>
      </form>
    </Container>
  );
};
const Container = styled.div`
  height: 844px;
  width: 390px;
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
  width: 184px;
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
  width: 189px;
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
  width: 84px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
`;

const P2 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 434px;
  left: 20px;
  width: 84px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
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
  top: 455px;
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

const Button1 = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 327px;
  left: 20px;
  width: 350px;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color: #181818;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;

const Button2 = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 769px;
  width: 391px;
  height: 76px;
  border: none;
  background-color: #181818;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

// 시간표시, 인증번호 틀렸을때 밑에 문구표시, 인증성공안했을때 다음창 안눌리는 색깔

export default PhoneCertification;
