import React from 'react';
import styled from 'styled-components';
const HotelSignup = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
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
        <button>회원가입</button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
`;
export default HotelSignup;
