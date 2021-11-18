import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <ul>
      <li>
        <Link to='checkArtistPhone'>아티스트 회원가입</Link>
      </li>
      <li>
        <Link to='checkBusiness'>호텔 회원가입</Link>
      </li>
    </ul>
  );
};

export default Main;
