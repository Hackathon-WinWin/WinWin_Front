import React from 'react';
import styled from 'styled-components';
const ArtistProfile = ({ form, dupNickname, dupEmail, onChange, onSubmit }) => {
  const { isDupNickname, nicknameMessage } = dupNickname;
  const { isDupEmail, emailMessage } = dupEmail;
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input
          name='nickname'
          value={form.nickname}
          onChange={onChange}
          placeholder='닉네임'
        />
        <p>{isDupNickname && nicknameMessage}</p>
        <p>{!isDupNickname && nicknameMessage}</p>
        <input
          name='name'
          value={form.name}
          onChange={onChange}
          placeholder='이름'
        />
        <input
          name='birthday'
          value={form.birthday}
          onChange={onChange}
          placeholder='생일'
        />
        <input
          name='address'
          value={form.address}
          onChange={onChange}
          placeholder='주소'
        />
        <input
          name='email'
          value={form.email}
          onChange={onChange}
          type='email'
          placeholder='email'
        />
        <p>{isDupEmail && emailMessage}</p>
        <p>{!isDupEmail && emailMessage}</p>
        <input
          name='introduceText'
          value={form.introduceText}
          onChange={onChange}
          placeholder='introduceText'
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
