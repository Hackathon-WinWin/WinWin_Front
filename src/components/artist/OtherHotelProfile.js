import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

const OtherHotelProfile = ({ otherHotelProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!otherHotelProfile) return null;
  const {
    profileImageURL,
    bookMarked,
    profile: {
      hotelName,
      address,
      phoneNumber,
      email,
      introduceText,
      bookMark,
      images,
    },
  } = otherHotelProfile;
  const onOpenMenu = (e) => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Wrapper>
      <HotelProfileImg image={profileImageURL}>
        <MenuBtn onClick={onOpenMenu}>
          <AiOutlineMenu size='22'></AiOutlineMenu>
        </MenuBtn>
      </HotelProfileImg>
      <HotelInfoBox>
        <HotelName>{hotelName}</HotelName>
        <HotelIntro>{introduceText}</HotelIntro>
        <HotelInfo>
          <li>{address}</li>
          <li>{phoneNumber}</li>
          <li>{email}</li>
        </HotelInfo>
      </HotelInfoBox>
      <HotelImageList>
        {images.length === 0 ? (
          <Message>이미지를 추가해주세요!</Message>
        ) : (
          images.map((image) => <li image={image.image}>{image}</li>)
        )}
      </HotelImageList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
const HotelProfileImg = styled.div`
  width: 100vw;
  height: 321px;

  background-image: url(${({ image }) => image});
`;
const MenuBtn = styled.button`
  margin: 16px;
  cursor: pointer;
  background: none;
  border: none;
`;
const HotelInfoBox = styled.div`
  background-color: white;
  position: absolute;
  top: 200px;
  left: calc(50vw - 174px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 348px;
  height: 251px;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;
const HotelName = styled.h2`
  margin-bottom: 25px;
`;
const HotelIntro = styled.p`
  margin-bottom: 25px;
`;
const HotelInfo = styled.ul`
  & > li {
    list-style: none;
    margin-top: 10px;
  }
`;
const HotelImageList = styled.ul`
  width: 100%;
  margin-top: 183px;
  display: grid;
  background-color: lightgray;
  flex: auto;
  & > li {
    list-style: none;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const Message = styled.p`
  margin: 30px auto 0;
`;
export default OtherHotelProfile;
