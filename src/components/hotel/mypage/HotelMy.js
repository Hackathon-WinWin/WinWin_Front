import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HotelMy = ({ myHotel, hotelProfileImg, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!myHotel || !hotelProfileImg) return <div>loading...</div>;
  const {
    hotelName,
    address,
    phoneNumber,
    email,
    introduceText,
    images,
    bookMark,
  } = myHotel;
  const onOpenMenu = (e) => {
    setIsOpen((prev) => !prev);
  };
  return (
    <HotelMyWrapper>
      <HotelProfileImg image={hotelProfileImg.profileImage}>
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
          images.map((image) => (
            <HotelImageBox key={image._id} image={image.image}></HotelImageBox>
          ))
        )}
      </HotelImageList>
      <MenuTab isOpen={isOpen}>
        <ul>
          <li>
            <MenuBtn onClick={onOpenMenu}>
              <AiOutlineMenu size='22'></AiOutlineMenu>
            </MenuBtn>
          </li>
          <li>
            <Link to='/editProfile'>프로필 편집</Link>
          </li>
          <li>
            <form>
              <label>
                <ImageInput
                  name='profileImage'
                  type='file'
                  accept='image/*'
                  onChange={onChange}
                />
                대표 이미지 편집
              </label>
            </form>
          </li>
        </ul>
        <BlackEmpty onClick={onOpenMenu} />
      </MenuTab>
      <form>
        <AddHotelImageLabel>
          <ImageInput
            name='image'
            type='file'
            accept='image/*'
            onChange={onChange}
          />
          <HiPlus color='white' size='25' />
        </AddHotelImageLabel>
      </form>
    </HotelMyWrapper>
  );
};
const HotelMyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 120vh;
  height: auto;
`;
const HotelProfileImg = styled.div`
  width: 100vw;
  height: 321px;
  background-image: url(${({ image }) => image});
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
  padding: 16px;
  box-sizing: border-box;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, 167px);
  grid-template-rows: repeat(auto-fit, 167px);
  background-color: lightgray;
  flex: auto;
`;
const HotelImageBox = styled.li`
  list-style: none;
  width: 167px;
  height: 167px;
  border-radius: 15px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
`;
const MenuTab = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: 100vw;
  & > ul {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100vh;
  }
`;
const BlackEmpty = styled.div`
  background-color: rgba(24, 24, 24, 0.8);
  width: 30%;
  height: 100vh;
`;
const MenuBtn = styled.button`
  margin: 16px;
  cursor: pointer;
  background: none;
  border: none;
`;
const Message = styled.p`
  margin: 30px auto 0;
`;
const AddHotelImageLabel = styled.label`
  cursor: pointer;
  background: #181818;
  border: none;
  border-radius: 50%;
  width: 68px;
  height: 68px;
  position: fixed;
  bottom: 12vh;
  left: calc(50vw - 34px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageInput = styled.input`
  display: none;
`;
export default HotelMy;
