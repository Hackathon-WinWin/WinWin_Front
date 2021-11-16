import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Signin = () => {
  return (
    <>
      <div>
        <Link to='artist'>아티스트 로그인</Link>
        <Link to='hotel'>호텔 로그인</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Signin;
