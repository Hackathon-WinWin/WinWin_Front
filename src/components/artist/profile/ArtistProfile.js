import React from 'react';
import styled from 'styled-components';
const ArtistProfile = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input
          name='nickname'
          value={form.nickname}
          onChange={onChange}
          placeholder='닉네임'
        />
        <input
          name='name'
          value={form.name}
          onChange={onChange}
          placeholder='name'
        />
        <input
          name='birthday'
          value={form.birthday}
          onChange={onChange}
          placeholder='생일'
        />
        <input
          name='email'
          value={form.email}
          onChange={onChange}
          type='email'
          placeholder='email'
        />
        <button>다음</button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
`;

export default ArtistProfile;
