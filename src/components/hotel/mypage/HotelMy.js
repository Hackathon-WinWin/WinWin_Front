/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HotelMy = ({ myHotel, hotelProfileImg, onChange, onLogout }) => {
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
        <Gradient />
        <Header>
          <div className='left'>
            <MenuBtn onClick={onOpenMenu}>
              <img
                src={process.env.PUBLIC_URL + 'icons/hamburger_w.svg'}
                alt='menu'
              />
            </MenuBtn>
            <img
              src={process.env.PUBLIC_URL + '/icons/bell_w.svg'}
              alt='bell_line'
            />
          </div>
          <div className='right'>
            <img
              src={process.env.PUBLIC_URL + 'icons/bookmark_w.svg'}
              alt='bookmark'
            />
            {bookMark}
          </div>
        </Header>
      </HotelProfileImg>
      <HotelInfoBox>
        <HotelName>{hotelName}</HotelName>
        <HotelIntro>{introduceText}</HotelIntro>
        <HotelInfo>
          <li>
            <img
              src={process.env.PUBLIC_URL + 'icons/location_b.svg'}
              alt='loc'
            />
            <p>{address}</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + 'icons/phone.svg'} alt='phone' />
            <p>{phoneNumber}</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + 'icons/mail.svg'} alt='mail' />
            <p>{email}</p>
          </li>
        </HotelInfo>
      </HotelInfoBox>
      {/* 이미지 */}
      <ImgBox>
        {images.length === 0 && (
          <Message>개인 포트폴리오를 추가해보세요!</Message>
        )}
        {images.length !== 0 && (
          <HotelImageList>
            {images.map((image) => (
              <HotelImageBox
                key={image._id}
                image={image.image}
              ></HotelImageBox>
            ))}
          </HotelImageList>
        )}
      </ImgBox>
      {/* 메뉴 */}
      <MenuTab isOpen={isOpen}>
        <ul>
          <li className='bottomLine' style={{ height: '92px' }}></li>
          <li>
            <Link className='styleLink' to='/editProfile'>
              프로필 편집
            </Link>
          </li>
          <li className='bottomLine'>
            <label className='styleLink'>
              <ImageInput
                name='profileImage'
                type='file'
                accept='image/*'
                onChange={onChange}
              />
              대표 이미지 편집
            </label>
          </li>
          <li className='bottomLine'>
            <Link className='styleLink' to='/main'>
              언어설정
            </Link>
          </li>
          <li>
            <Link className='styleLink' to='/main'>
              사용약관
            </Link>
          </li>
          <li>
            <Link className='styleLink' to='/main'>
              버전 정보
            </Link>
          </li>
          <li>
            <button
              className='styleLink'
              onClick={onLogout}
              css={css`
                border: none;
                background: none;
              `}
            >
              로그아웃
            </button>
          </li>
          <li>
            <Link className='styleLink' to='/main'>
              탈퇴하기
            </Link>
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
  background: center / cover no-repeat url(${({ image }) => image});
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
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: #181818;
`;
const HotelIntro = styled.p`
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #000000;
  opacity: 0.6;
`;
const HotelInfo = styled.ul`
  & > li {
    & > img {
      width: 19px;
      height: 19px;
    }
    display: flex;
    gap: 10px;
    align-items: center;
    list-style: none;
    margin-top: 10px;
  }
`;
const ImgBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 183px;
  margin-bottom: 80px;
  flex: auto;
  padding: 16px;
  box-sizing: border-box;
  background-color: #f9f9f9;
`;
const HotelImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 167px);
  grid-template-rows: repeat(auto-fit, 167px);
  grid-gap: 18px;
  width: 100vw;
  flex: auto;
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 7px rgba(0, 0, 0, 0.25));
`;
const HotelImageBox = styled.li`
  list-style: none;
  width: 167px;
  height: 167px;
  border-radius: 15px;
  background: center / cover no-repeat url(${({ image }) => image});
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
    & > li {
      list-style: none;
      &.bottomLine {
        border-bottom: 1px solid #d9d9d9;
      }
      & > .styleLink {
        padding: 16px;
        box-sizing: border-box;
        text-decoration: none;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        display: flex;
        align-items: center;
        color: #181818;
      }
    }
  }
`;
const BlackEmpty = styled.div`
  background-color: rgba(24, 24, 24, 0.8);
  width: 30%;
  height: 100vh;
`;
const Gradient = styled.div`
  width: 100vw;
  height: 138px;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 0) 18.23%,
    #181818 90.1%
  );
  transform: rotate(-180deg);
`;
const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
  & > div.left,
  div.right {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #ffffff;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
`;
const MenuBtn = styled.button`
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
