import React from 'react';

const ArtistSignin = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <h1>아티스트 로그인</h1>
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
    </div>
  );
};

export default ArtistSignin;
