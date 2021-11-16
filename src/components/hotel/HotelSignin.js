import React from 'react';

const HotelSignin = ({ form, onChange, onSubmit, onLogout }) => {
  return (
    <div>
      <h1>호텔 로그인</h1>
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
      <button onClick={onLogout}>logout</button>
    </div>
  );
};

export default HotelSignin;
