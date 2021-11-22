import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ArtistMy = ({ myArtist, artistProfileImg, artistBackImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenMenu = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ArtistMyWrapper>
      <ArtistBgImg backgroundImage={artistBackImg.backgroundImage}>
        <div>
          <MenuBtn onClick={onOpenMenu}>
            <AiOutlineMenu size='22'></AiOutlineMenu>
          </MenuBtn>
        </div>
      </ArtistBgImg>
      <ArtistInfo>
        <ArtistProfileImg
          profileImage={artistProfileImg.profileImage}
        ></ArtistProfileImg>
        <h3>{myArtist.name}</h3>
        <div>{myArtist.phoneNumber}</div>
        <div>{myArtist.email}</div>
      </ArtistInfo>
      <PortfolioList>1</PortfolioList>
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
        </ul>
        <BlackEmpty onClick={onOpenMenu} />
      </MenuTab>
    </ArtistMyWrapper>
  );
};

const ArtistMyWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
`;
const ArtistBgImg = styled.div`
  width: 100vw;
  height: 220px;
  background: lightgray;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const ArtistProfileImg = styled.div`
  position: absolute;
  left: calc(50vw - 53px);
  bottom: calc(185px - 53px);
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background: lightgreen;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const ArtistInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 185px;
  flex-direction: column;
  justify-content: flex-end;
`;
const PortfolioList = styled.div`
  background-color: #f9f9f9;
  width: 100vw;
  min-height: 50vh;
`;
const MenuBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
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
export default ArtistMy;
