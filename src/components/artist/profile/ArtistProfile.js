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
      <form onSubmit={onSubmit}>
        <P1>닉네임</P1>
        <Input1
          name="nickname"
          value={form.nickname}
          onChange={onChange}
          placeholder=""
        />
        <NicknameError>{isDupNickname && nicknameMessage}</NicknameError>
        <NicknameSuccess>{!isDupNickname && nicknameMessage}</NicknameSuccess>
        <P2>이름</P2>
        <Input2
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder=""
        />
        <P3>생년월일</P3>
        <Input3
          name="birthday"
          value={form.birthday}
          onChange={onChange}
          placeholder=""
        />
        <P4>거주지역</P4>
        <Input4
          name="address"
          value={form.address}
          onChange={onChange}
          placeholder=""
        />
        <P5>메일</P5>
        <Input5
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder=""
        />
        <MailSuccess>{isDupEmail && emailMessage}</MailSuccess>
        <MailError>{!isDupEmail && emailMessage}</MailError>
        <P6>소개</P6>
        <P7>최대 40자</P7>
        <IntroduceTextArea
          name="introduceText"
          value={form.introduceText}
          onChange={onChange}
          placeholder=""
        />
        <SubmitBtn>다음</SubmitBtn>
      </form>
    </Container>
  );
};
const Container = styled.div`
  height: 1017px;
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
  width: 155px;
  height: 28px;
  color: #000000;
  font-size: 32px;
  font-weight: 700;
`;

const TitleContainer = styled.header`
  top: 0px;
  position: sticky;
  background-color: #ffffff;
  width: 100vw;
  height: 20vh;
  z-index: 99;
`;

const Subtitle = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 118px;
  left: 20px;
  width: 271px;
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
  top: 242px;
  left: 20px;
  width: 40px;
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
  top: 364px;
  left: 20px;
  width: 27px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
`;

const P3 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 457px;
  left: 20px;
  width: 54px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
`;

const P4 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 550px;
  left: 20px;
  width: 54px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
`;

const P5 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 643px;
  left: 20px;
  width: 27px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
`;

const P6 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 746px;
  left: 20px;
  width: 27px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
`;

const P7 = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 748px;
  left: 308px;
  width: 61px;
  height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  color: #929292;
`;

const MailSuccess = styled.p`
  position: absolute;
  display: flex;
  top: 714px;
  left: 20px;
  width: 100vw;
  height: 16px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  color: #1d1d1d;
`;

const MailError = styled.p`
  position: absolute;
  display: flex;
  top: 714px;
  left: 20px;
  width: 100vw;
  height: 16px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  color: #ff1212;
`;

const NicknameSuccess = styled.p`
  position: absolute;
  display: flex;
  top: 313px;
  left: 20px;
  width: 100vw;
  height: 16px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  color: #1d1d1d;
`;

const NicknameError = styled.p`
  position: absolute;
  display: flex;
  top: 313px;
  left: 20px;
  width: 100vw;
  height: 16px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  color: #ff1212;
`;

const Input1 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 263px;
  left: 20px;
  width: 350px;
  height: 40px;
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
  top: 385px;
  left: 20px;
  width: 350px;
  height: 40px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: 500;
`;

const Input3 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 478px;
  left: 20px;
  width: 350px;
  height: 40px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: 500;
`;

const Input4 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 571px;
  left: 20px;
  width: 350px;
  height: 40px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: 500;
`;

const Input5 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 664px;
  left: 20px;
  width: 350px;
  height: 40px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-weight: 500;
`;

const IntroduceTextArea = styled.textarea`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 771px;
  left: 20px;
  width: 350px;
  height: 125px;
  border-radius: 10px;
  background-color: #f3f3f3;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 11px;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 772px;
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
