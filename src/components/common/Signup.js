import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='../checkArtistPhone'>아티스트 회원가입</Link>
        </li>
        <li>
          <Link to='../checkBusiness'>호텔 회원가입</Link>
        </li>
      </ul>
    </div>
  );
};

export default Signup;
