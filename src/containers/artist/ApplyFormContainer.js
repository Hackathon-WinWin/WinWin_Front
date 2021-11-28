import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { artistMakeApplication, artistSendApplication } from '../../api/match';
import ApplyForm from '../../components/artist/ApplyForm';

const ApplyFormContainer = () => {
  const { hotelAuth_id, recruitment_id } = useParams();
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
      const data = { hotelAuth_id, recruitment_id, ...artistInfo, ...form };
      const response = await artistSendApplication(data);
      if (response.status === 200) {
        navigate(-1);
        setForm((state) => ({
          ...state,
          title: '',
          message: '',
        }));
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    const fetchArtistInfo = async () => {
      try {
        const response = await artistMakeApplication(recruitment_id);
        setArtistInfo(response.data);
      } catch (e) {}
    };
    if (recruitment_id) fetchArtistInfo();
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
