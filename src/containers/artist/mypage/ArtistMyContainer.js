import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ArtistMy from '../../../components/artist/mypage/ArtistMy';
import {
  getMyAritistProfile,
  getMyArtistBgImg,
  getMyArtistProfileImg,
} from '../../../modules/myPage';

const ArtistMyContainer = () => {
  const { myArtist, artistProfileImg, artistBackImg } = useSelector(
    ({ myPage }) => ({
      myArtist: myPage.myArtist,
      artistProfileImg: myPage.artistProfileImg,
      artistBackImg: myPage.artistBackImg,
    })
  );
  const dispatch = useDispatch();

  // jwt 발급 오류로 안됨
  //   useEffect(() => {
  //     dispatch(getMyAritistProfile());
  //     dispatch(getMyArtistProfileImg());
  //     dispatch(getMyArtistBgImg());
  //   }, [dispatch]);
  return (
    <ArtistMy
      myArtist={myArtist}
      artistProfileImg={artistProfileImg}
      artistBackImg={artistBackImg}
    />
  );
};

export default ArtistMyContainer;
