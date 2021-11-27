/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import DetailPortfolio from './DetailPortfolio';

const ArtistMy = ({
  form,
  openDetail,
  setOpenDetail,
  setForm,
  myArtist,
  artistProfileImg,
  artistBackImg,
  myPortfolio,
  onChange,
  onChangeFile,
  onAddPortfolio,
  onLogout,
}) => {
  const imgRef = useRef();
  const previewRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  if (!artistProfileImg || !artistBackImg || !myArtist || !myPortfolio)
    return null;
  const { artistAuth_id } = myPortfolio;
  const onOpenMenu = (e) => {
    setIsOpen((prev) => !prev);
  };
  const handleOnChangeFiles = (e) => {
    onChange(e);
    const {
      target: { files },
    } = e;
    if ([...files].length > 0) {
      setOpenDetail(true);
      const reader = new FileReader();
      const previewImg = files[0];
      reader.readAsDataURL(previewImg);
      reader.onloadend = () => {
        previewRef.current.style.backgroundImage = `url(${reader.result})`;
      };
    }
  };
  return (
    <ArtistMyWrapper>
      <ArtistBgImg backgroundImage={artistBackImg.backgroundImage}>
        <MenuBtn onClick={onOpenMenu}>
          <AiOutlineMenu size='22'></AiOutlineMenu>
        </MenuBtn>
      </ArtistBgImg>
      <ArtistInfo>
        <ArtistProfileImg profileImage={artistProfileImg.profileImage}>
          <label>
            <img
              src={process.env.PUBLIC_URL + '/icons/my_pen.svg'}
              alt='수정'
            />
            <input type='file' name='profileImage' onChange={onChangeFile} />
          </label>
        </ArtistProfileImg>
        <div>
          <h3>{myArtist.name}</h3>
          <p className='phone'>
            <img
              src={process.env.PUBLIC_URL + '/icons/phone.svg'}
              alt='phone'
            />
            {myArtist.phoneNumber}
          </p>
          <p className='email'>
            <img src={process.env.PUBLIC_URL + '/icons/mail.svg'} alt='phone' />
            {myArtist.email}
          </p>
        </div>
      </ArtistInfo>
      <PortfolioList>
        {!myPortfolio && <p>개인 포트폴리오를 불러올 수 없습니다.</p>}
        {myPortfolio &&
          (myPortfolio.portfolios.length === 0 ? (
            <p>개인 포트폴리오를 추가해보세요!</p>
          ) : (
            myPortfolio.portfolios.map((portfolio) => (
              <PreviewImg key={portfolio._id} image={portfolio.images[0].image}>
                <Link
                  css={css`
                    display: block;
                    width: 100%;
                    height: 100%;
                  `}
                  to={`/mySpecificPortfolio/${artistAuth_id}/${portfolio._id}`}
                  state={{
                    profileImageURL: artistProfileImg,
                    artistName: myArtist.name,
                  }}
                />
              </PreviewImg>
            ))
          ))}
      </PortfolioList>
      {/* 메뉴 */}
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
          <li></li>
          <li>
            <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
          </li>
        </ul>
        <BlackEmpty onClick={onOpenMenu} />
      </MenuTab>
      <form onSubmit={onAddPortfolio}>
        <AddPortfolioLabel>
          <ImageInput
            ref={imgRef}
            name='images'
            type='file'
            accept='image/*'
            onChange={handleOnChangeFiles}
            required
            multiple
          />
          <HiPlus color='white' size='25' />
        </AddPortfolioLabel>
        {openDetail && (
          <DetailPortfolio
            setOpenDetail={setOpenDetail}
            setForm={setForm}
            onChange={onChange}
            form={form}
            previewRef={previewRef}
          />
        )}
      </form>
    </ArtistMyWrapper>
  );
};

const ArtistMyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;
const ArtistBgImg = styled.div`
  width: 100vw;
  height: 220px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const ArtistProfileImg = styled.div`
  position: absolute;
  left: calc(50vw - 53px);
  bottom: calc(185px - 53px);
  width: 106px;
  height: 106px;
  border-radius: 50%;
  background-image: url(${({ profileImage }) => profileImage});
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & input {
    display: none;
  }
`;
const ArtistInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  height: 185px;
  & > div {
    display: flex;
    flex-direction: column;
    & > h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 16px;
      margin-bottom: 23px;
      align-self: center;
    }
    & > p {
      display: flex;
      &.phone {
        font-family: 'Noto Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin-bottom: 11px;
      }
      &.email {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin-bottom: 30px;
      }
      & > img {
        width: 19px;
        height: 19px;
        margin-right: 15px;
      }
    }
  }
`;
const PortfolioList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 167px);
  grid-template-rows: repeat(auto-fit, 167px);
  grid-gap: 18px;
  background-color: #f9f9f9;
  width: 100vw;
  flex: auto;
  padding: 16px;
  box-sizing: border-box;
  & > p {
    margin: 50px auto 0;
  }
`;
const PreviewImg = styled.li`
  list-style: none;
  width: 167px;
  height: 167px;
  background-image: url(${({ image }) => image});
  border-radius: 15px;
`;
const AddPortfolioLabel = styled.label`
  cursor: pointer;
  background: #181818;
  border: none;
  border-radius: 50%;
  width: 68px;
  height: 68px;
  position: absolute;
  bottom: 12vh;
  left: calc(50vw - 34px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageInput = styled.input`
  display: none;
`;
const MenuBtn = styled.button`
  margin: 16px;
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
const LogoutBtn = styled.button`
  border: none;
  background: none;
`;
export default ArtistMy;
