import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { artistMakeApplication, artistSendApplication } from '../../api/match';
import ApplyForm from '../../components/artist/ApplyForm';

const dummy = {
  name: '공혁준',
  birthday: '1998-02-05T00:00:00.000Z',
  address: '서울시 중구 신당동',
  phoneNumber: '01079998559',
  email: 'orijoon98@gmail.com2',
  hotelName: '서울 호텔',
  recruitmentTitle: '서울호텔 자연컨셉 작품 모집',
};
const ApplyFormContainer = () => {
  const { recruitment_id } = useParams();
  const [artistInfo, setArtistInfo] = useState();
  const navigate = useNavigate();

  const initForm = {
    title: '',
    message: '',
  };
  const [form, setForm] = useState(initForm);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const onApply = async (e) => {
    e.preventDefault();
    try {
      const response = await artistSendApplication({
        ...artistInfo,
        ...form,
      });
      if (response.status === 200) {
        navigate(-1);
        setForm((state) => ({
          ...state,
          title: '',
          message: '',
        }));
      }
    } catch (e) {}
  };

  useEffect(() => {
    // const fetchArtistInfo = async () => {
    //   try {
    //     const response = await artistMakeApplication(recruitment_id);
    //     setArtistInfo(response.data);
    //   } catch (e) {}
    // };
    // if (recruitment_id) fetchArtistInfo();
    if (recruitment_id) setArtistInfo(dummy);
  }, [recruitment_id]);

  return (
    <ApplyForm
      form={form}
      artistInfo={artistInfo}
      onApply={onApply}
      onChange={onChange}
    />
  );
};

export default ApplyFormContainer;
