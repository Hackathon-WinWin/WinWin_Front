import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BusinessCertification from '../../components/hotel/BusinessCertification';
import { checkBusiness, initBusinessCertify } from '../../modules/certificate';

const BusinessCertificationContainer = () => {
  const { checkBusinessSuccess, checkBusinessError } = useSelector(
    ({ certificate }) => ({
      checkBusinessSuccess: certificate.checkBusinessSuccess,
      checkBusinessError: certificate.checkBusinessError,
    })
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    businessNumber: '',
    openDate: '',
    hostName: '',
  };
  const [form, setForm] = useState(initialState);
  const [certifyMessage, setCertifyMessage] = useState('');
  const [isClickFirst, setIsFirstClick] = useState(true);
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkBusiness(form));
    setIsFirstClick(false);
  };
  useEffect(() => {
    if (checkBusinessSuccess) {
      setCertifyMessage('인증이 완료되었습니다.');
      return;
    }
    if (checkBusinessError) {
      setCertifyMessage('다시 인증을 해주세요.');
      dispatch(initBusinessCertify());
      setForm((state) => ({
        ...state,
        businessNumber: '',
        openDate: '',
        hostName: '',
      }));
      return;
    }
  }, [checkBusinessSuccess, checkBusinessError, navigate, dispatch, form]);

  return (
    <BusinessCertification
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      checkBusinessSuccess={checkBusinessSuccess}
      certifyMessage={certifyMessage}
      isClickFirst={isClickFirst}
    />
  );
};

export default BusinessCertificationContainer;
