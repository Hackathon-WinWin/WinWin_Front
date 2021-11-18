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
    hostName: '',
    openDate: '',
  };
  const [form, setForm] = useState(initialState);
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkBusiness(form));
  };
  useEffect(() => {
    if (checkBusinessSuccess) {
      console.log('Success certificate');
      navigate('/signupHotel', { state: form });
      return;
    }
    if (checkBusinessError) {
      alert('Error: certificate');
      dispatch(initBusinessCertify());
      return;
    }
  }, [checkBusinessSuccess, checkBusinessError, navigate, dispatch, form]);

  return (
    <BusinessCertification
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default BusinessCertificationContainer;
