import React from 'react';
import styled from 'styled-components';

const HotelProfile = ({ form, onChange, onSubmit }) => {
  return (
    <Container>
      <Title>프로필 설정</Title>
      <Subtitle>아티스트들에게 보여질 프로필을 만드세요.</Subtitle>
      <form onSubmit={onSubmit}>
        <Input1
          name='hotelName'
          value={form.hotelName}
          onChange={onChange}
          placeholder='호텔명'
        />
        <Input2
          name='address'
          value={form.address}
          onChange={onChange}
          placeholder='주소'
        />
        <Input3
          name='phoneNumber'
          value={form.phoneNumber}
          onChange={onChange}
          placeholder='전화'
        />
        <Input4
          name='email'
          value={form.email}
          onChange={onChange}
          placeholder='메일'
        />
        <Input5
          name='introduceText'
          value={form.introduceText}
          onChange={onChange}
          placeholder='소개'
        />
        <Button1>완료</Button1>
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
  width: 155px;
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
  width: 211px;
  height: 28px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

const Button1 = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 769px;
  width: 390px;
  height: 75px;
  border: none;
  background-color: #181818;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

const Input1 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 212px;
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
  top: 270px;
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

const Input3 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 328px;
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

const Input4 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 386px;
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

const Input5 = styled.input`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 444px;
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

export default HotelProfile;
