import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PhoneCertification from '../../components/artist/PhoneCertification';
import {
  checkNumber,
  initPhoneCertify,
  requireNumber,
} from '../../modules/certificate';

const PhoneCertificationContainer = () => {
  const {
    requirePhoneSuccess,
    requirePhoneError,
    checkPhoneSuccess,
    checkPhoneError,
  } = useSelector(({ certificate }) => ({
    requirePhoneSuccess: certificate.requirePhoneSuccess,
    requirePhoneError: certificate.requirePhoneError,
    checkPhoneSuccess: certificate.checkPhoneSuccess,
    checkPhoneError: certificate.checkPhoneError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    phoneNumber: '',
    certification: '',
  };
  const [form, setForm] = useState(initialState);
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmitPhoneNumber = (e) => {
    e.preventDefault();
    dispatch(requireNumber(form.phoneNumber));
  };
  const onCertify = (e) => {
    e.preventDefault();
    dispatch(checkNumber(form));
  };
  useEffect(() => {
    if (requirePhoneError) {
      alert('다시 인증 요청을 해주세요.');
      dispatch(initPhoneCertify());
      setForm((state) => ({ ...state, phoneNumber: '', certification: '' }));
      return;
    }
  }, [requirePhoneError, dispatch]);

  useEffect(() => {
    if (checkPhoneSuccess) {
      navigate('/signupArtist', { state: { phoneNumber: form.phoneNumber } });
      return;
    }
    if (checkPhoneError) {
      // 에러 처리 자세히 해줘야함
      alert('인증번호를 확인해주세요.');
      dispatch(initPhoneCertify());
      setForm((state) => ({ ...state, phoneNumber: '', certification: '' }));
      return;
    }
  }, [checkPhoneSuccess, checkPhoneError, navigate, dispatch, form]);

  return (
    <PhoneCertification
      form={form}
      onChange={onChange}
      onSubmitPhoneNumber={onSubmitPhoneNumber}
      onCertify={onCertify}
      requirePhoneSuccess={requirePhoneSuccess}
    />
  );
};

export default PhoneCertificationContainer;
