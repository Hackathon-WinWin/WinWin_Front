import React from 'react';
import styled from 'styled-components';

const HotelProfile = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <h1>프로필 설정</h1>
      <Form onSubmit={onSubmit}>
        <input
          name='hotelName'
          value={form.hotelName}
          onChange={onChange}
          placeholder='호텔명'
        />
        <input
          name='address'
          value={form.address}
          onChange={onChange}
          placeholder='주소'
        />
        <input
          name='phoneNumber'
          value={form.phoneNumber}
          onChange={onChange}
          placeholder='전화'
        />
        <input
          name='email'
          value={form.email}
          onChange={onChange}
          placeholder='메일'
        />
        <input
          name='introduceText'
          value={form.introduceText}
          onChange={onChange}
          placeholder='소개'
        />
        <button>완료</button>
      </Form>
    </div>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export default HotelProfile;
