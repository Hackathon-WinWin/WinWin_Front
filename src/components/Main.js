import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Link to='checkArtistPhone'>아티스트 회원가입</Link>
      <Link to='checkBusiness'>호텔 회원가입</Link>
      <Link to='signin'>로그인</Link>
    </>
  );
};

export default Main;
