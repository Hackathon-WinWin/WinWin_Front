import React from 'react';
import styled from 'styled-components';

const OtherHotelProfile = ({ otherHotelProfile }) => {
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
  console.log(otherHotelProfile);
  return (
    <Wrapper>
      <HotelProfileImg image={profileImageURL}>
        <Gradient />
        <Header>
          <BookMark>
            {bookMarked ? (
              <img
                src={process.env.PUBLIC_URL + '/icons/bookmark_w.svg'}
                alt='book'
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + '/icons/bookmark_line_w.svg'}
                alt='book'
              />
            )}
            {bookMark}
          </BookMark>
          <img src={process.env.PUBLIC_URL + '/icons/bell_w.svg'} alt='book' />
        </Header>
      </HotelProfileImg>
      <HotelInfoBox>
        <HotelName>{hotelName}</HotelName>
        <HotelIntro>{introduceText}</HotelIntro>
        <HotelInfo>
          <li>
            <Icon
              src={process.env.PUBLIC_URL + '/icons/location_b.svg'}
              alt='loc'
            />
            {address}
          </li>
          <li>
            <Icon
              src={process.env.PUBLIC_URL + '/icons/phone.svg'}
              alt='phone'
            />
            {phoneNumber}
          </li>
          <li>
            <Icon src={process.env.PUBLIC_URL + '/icons/mail.svg'} alt='mail' />
            {email}
          </li>
        </HotelInfo>
      </HotelInfoBox>
      <HotelImgBox>
        {images.length === 0 && <Message>해당 호텔 이미지가 없습니다.</Message>}
        {images.length !== 0 && (
          <HotelImageList>
            {images.map((image, index) => (
              <HotelImgItem key={index} image={image.image}></HotelImgItem>
            ))}
          </HotelImageList>
        )}
      </HotelImgBox>
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
const Gradient = styled.div`
  width: 100%;
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
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 16px;
  /* identical to box height, or 80% */

  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  margin-bottom: 25px;
`;
const HotelIntro = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;

  color: #000000;
  margin-bottom: 25px;
`;
const HotelInfo = styled.ul`
  & > li {
    list-style: none;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
`;
const HotelImgBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 183px;
  margin-bottom: 80px;
  flex: auto;
  padding: 16px;
  box-sizing: border-box;
`;
const HotelImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 167px);
  grid-template-rows: repeat(2, 167px);
  gap: 16px;
  width: 100%;
  background-color: F4F4F4;
`;
const HotelImgItem = styled.li`
  border-radius: 15px;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
  list-style: none;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
`;
const BookMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Noto Sans', sans-serif;
`;
const Message = styled.div`
  margin: 30px auto 0;
`;
const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
export default OtherHotelProfile;
