import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCertification = ({
  form,
  onChange,
  onSubmitPhoneNumber,
  onCertify,
  requirePhoneSuccess,
}) => {
  return (
    <div>
      <h1>전화번호 인증</h1>
      <form onSubmit={onSubmitPhoneNumber}>
        <input
          name='phoneNumber'
          value={form.phoneNumber}
          onChange={onChange}
        />
        <button>인증번호 요청</button>
      </form>
      <form onSubmit={onCertify}>
        <input
          name='certification'
          value={form.certification}
          onChange={onChange}
        />
        <button disabled={requirePhoneSuccess === null}>다음</button>
      </form>
    </div>
  );
};

export default PhoneCertification;
