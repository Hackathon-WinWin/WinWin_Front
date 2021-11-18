import React from 'react';
import { Link } from 'react-router-dom';

const Entry = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <h1>WinWin</h1>
      <form onSubmit={onSubmit}>
        <input
          name='account'
          value={form.account}
          placeholder='아이디'
          onChange={onChange}
        />
        <input
          name='password'
          value={form.password}
          placeholder='비밀번호'
          onChange={onChange}
          type='password'
        />
        <button>로그인</button>
      </form>
      <Link to='/signup'>회원가입</Link>
    </div>
  );
};

export default Entry;
