import React from 'react';
import styled from 'styled-components';

const EditArtistProfile = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <div>
          <label htmlFor='nickname'>닉네임</label>
          <input name='nickname' value={form.nickname} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='name'>이름</label>
          <input name='name' value={form.name} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='birthday'>생일</label>
          <input name='birthday' value={form.birthday} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='address'>주소</label>
          <input name='address' value={form.address} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='email'>이메일</label>
          <input name='email' value={form.email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='introduceText'>소개</label>
          <textarea
            name='introduceText'
            value={form.introduceText}
            onChange={onChange}
          />
        </div>
        <button>완료</button>
      </Form>
    </div>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 16px;
`;
export default EditArtistProfile;
