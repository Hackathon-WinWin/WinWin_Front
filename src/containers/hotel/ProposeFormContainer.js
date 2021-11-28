import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { hotelMakeApplication, hotelSendApplication } from '../../api/match';
import ProposeForm from '../../components/hotel/ProposeForm';
import { readMyRecruitment } from '../../modules/recruitment';

const ProposeFormContainer = () => {
  const { myRecuitementList } = useSelector(({ recruitment }) => ({
    myRecuitementList: recruitment.myRecuitementList,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { artistAuth_id } = useParams();
  const [hotelInfo, setHotelInfo] = useState();
  const initForm = {
    artistAuth_id,
    recruitment_id: null,
    title: '',
    message: '',
  };
  const [form, setForm] = useState(initForm);
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };
  const onPropose = async (e) => {
    e.preventDefault();
    const { phoneNumber, email } = hotelInfo;
    try {
      const response = await hotelSendApplication({
        ...form,
        phoneNumber,
        email,
      });
      if (response.status === 200) {
        navigate(-1);
        setForm((state) => ({
          ...state,
          title: '',
          message: '',
          artistAuth_id,
          recruitment_id: null,
        }));
      }
    } catch (e) {
      alert('죄송합니다. 지원서를 다시 작성해주세요.');
    }
  };
  useEffect(() => {
    const fetchHotelInfo = async () => {
      try {
        const response = await hotelMakeApplication();
        setHotelInfo(response.data);
      } catch (e) {}
    };
    fetchHotelInfo();
    // setHotelInfo(dummy);
  }, []);
  // 나의 모집 공고 가져오기
  useEffect(() => {
    dispatch(readMyRecruitment());
  }, [dispatch]);
  return (
    <ProposeForm
      hotelInfo={hotelInfo}
      myRecuitementList={myRecuitementList}
      form={form}
      onChange={onChange}
      onPropose={onPropose}
    />
  );
};

export default ProposeFormContainer;
