import React from 'react';

const BusinessCertification = ({ form, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='businessNumber'
          value={form.businessNumber}
          onChange={onChange}
          placeholder='사업자번호'
        />
        <input
          name='hostName'
          value={form.hostName}
          onChange={onChange}
          placeholder='대표자 성명'
        />
        <input
          name='openDate'
          value={form.openDate}
          onChange={onChange}
          placeholder='YYMMDD'
        />
        <button>다음</button>
      </form>
    </div>
  );
};

export default BusinessCertification;
