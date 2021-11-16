import React from 'react';

const HotelSignup = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='account'
          value={form.account}
          onChange={onChange}
          placeholder='아이디'
        />
        <input
          name='password'
          value={form.password}
          onChange={onChange}
          placeholder='비밀번호'
          type='password'
        />
        <input
          name='passwordConfirm'
          value={form.passwordConfirm}
          onChange={onChange}
          placeholder='비밀번호 확인'
          type='password'
        />
        <input
          name='hostName'
          value={form.hostName}
          onChange={onChange}
          placeholder='이름'
        />
        <input
          name='openDate'
          value={form.openDate}
          onChange={onChange}
          placeholder='오픈 날짜'
        />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default HotelSignup;
