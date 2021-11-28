/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
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
      <ArtistBgImg image={artistBackImg.backgroundImage}>
        <Gradient />
        <Header>
          <MenuBtn onClick={onOpenMenu}>
            <img
              src={process.env.PUBLIC_URL + 'icons/hamburger_w.svg'}
              alt='menu'
            />
          </MenuBtn>
        </Header>
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
      {/* 이미지 */}
      <ImgBox>
        {myPortfolio.portfolios.length === 0 && (
          <p>개인 포트폴리오를 추가해보세요!</p>
        )}
        <PortfolioList>
          {myPortfolio.portfolios.length !== 0 &&
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
            ))}
        </PortfolioList>
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
              배너 이미지 수정
              <ImageInput
                type='file'
                name='backgroundImage'
                onChange={onChangeFile}
              />
            </label>
          </li>
          <li className='bottomLine'>
            <Link className='styleLink' to='/main'>
              해시태그 설정
            </Link>
          </li>
          <li className='bottomLine'>
            <Link className='styleLink' to='/main'>
              내가 쓴 게시글
            </Link>
          </li>
          <li>
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
            <Button className='styleLink' onClick={onLogout}>
              로그아웃
            </Button>
          </li>
          <li>
            <Link className='styleLink' to='/main'>
              탈퇴하기
            </Link>
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
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;
const Header = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
`;
const ArtistBgImg = styled.div`
  position: relative;
  width: 100vw;
  height: 220px;
  background: center / cover no-repeat url(${({ image }) => image});
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
      align-items: center;
      gap: 16px;
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
      }
    }
  }
`;
const ImgBox = styled.div`
  display: flex;
  background-color: #f9f9f9;
  width: 100vw;
  flex: auto;
  box-sizing: border-box;
  margin-bottom: 80px;
  & > p {
    margin: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #000000;
    opacity: 0.5;
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
`;
const PreviewImg = styled.li`
  list-style: none;
  width: 167px;
  height: 167px;
  border-radius: 15px;
  background: center / cover no-repeat url(${({ image }) => image});
`;
const AddPortfolioLabel = styled.label`
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
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.19));
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
const Button = styled.button`
  border: none;
  background: none;
`;
export default ArtistMy;
