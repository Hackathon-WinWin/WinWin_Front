import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddRecruit from '../../../components/hotel/recruitment/AddRecruit';
import { addRecruitment } from '../../../modules/recruitment';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddRecruitContainer = () => {
  const { addSuccess, addError } = useSelector(({ recruitment }) => ({
    addSuccess: recruitment.addSuccess,
    addError: recruitment.addError,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initState = {
    images: [],
    applicationStartDate: new Date(),
    applicationEndDate: new Date(),
    exhibitionStartDate: new Date(),
    exhibitionEndDate: new Date(),
    area: '',
    recruitNumber: '',
    concept: '',
    title: '',
    introduceText: '',
  };
  const [form, setForm] = useState(initState);
  const onChange = (e) => {
    const {
      target: { name, value, files },
    } = e;
    setForm((state) => ({
      ...state,
      [name]: name === 'images' ? state.images.concat(files[0]) : value,
    }));
  };
  const onChangeAppDate = (date) => {
    setForm((state) => ({
      ...state,
      applicationStartDate: date[0],
      applicationEndDate: date[1],
    }));
  };
  const onChangExhibitDate = (date) => {
    setForm((state) => ({
      ...state,
      exhibitionStartDate: date[0],
      exhibitionEndDate: date[1],
    }));
  };
  const onAddRecruit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    form.images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('exhibitionStartDate', form.exhibitionStartDate);
    formData.append('exhibitionEndDate', form.exhibitionEndDate);
    formData.append('applicationStartDate', form.applicationStartDate);
    formData.append('applicationEndDate', form.applicationEndDate);
    formData.append('area', form.area);
    formData.append('concept', form.concept);
    formData.append('recruitNumber', form.recruitNumber);
    formData.append('title', form.title);
    formData.append('introduceText', form.introduceText);
    dispatch(addRecruitment(formData));
  };
  useEffect(() => {
    return () => {
      setForm((state) => ({
        ...state,
        images: [],
        exhibitionStartDate: new Date(),
        exhibitionEndDate: new Date(),
        applicationStartDate: new Date(),
        applicationEndDate: new Date(),
        area: '',
        recruitNumber: '',
        concept: '',
        title: '',
        introduceText: '',
      }));
    };
  }, []);
  useEffect(() => {
    if (addSuccess) {
      navigate('/recruit');
    }
  }, [addSuccess, navigate]);
  return (
    <AddRecruit
      form={form}
      onAddRecruit={onAddRecruit}
      onChange={onChange}
      onChangExhibitDate={onChangExhibitDate}
      onChangeAppDate={onChangeAppDate}
    />
  );
};

export default AddRecruitContainer;
