import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddRecruit from '../../../components/hotel/recruitment/AddRecruit';
import { addRecruitment } from '../../../modules/recruitment';
import dayjs from 'dayjs';

const AddRecruitContainer = () => {
  const dispatch = useDispatch();
  const initState = {
    images: [],
    exhibitionStartDate: new Date(),
    exhibitionEndDate: new Date(),
    applicationStartDate: new Date(),
    applicationEndDate: new Date(),
    area: '',
    concept: '',
    title: '',
    introduceText: '',
  };
  const [form, setForm] = useState(initState);
  const onChange = (e) => {
    const {
      target: { name, value, files },
    } = e;
    // console.log(name, value);
    setForm((state) => ({
      ...state,
      [name]: name === 'images' ? state.images.concat(files[0]) : value,
    }));
  };
  const onChangExStartDate = (date) => {
    const dateFormat = dayjs(date).format('YYYY-MM-DD');
    setForm((state) => ({ ...state, exhibitionStartDate: dateFormat }));
  };
  const onChangExEndDate = (date) => {
    const dateFormat = dayjs(date).format('YYYY-MM-DD');
    setForm((state) => ({ ...state, exhibitionEndDate: dateFormat }));
  };
  const onChangAppStartDate = (date) => {
    const dateFormat = dayjs(date).format('YYYY-MM-DD');
    setForm((state) => ({ ...state, applicationStartDate: dateFormat }));
  };
  const onChangAppEndDate = (date) => {
    const dateFormat = dayjs(date).format('YYYY-MM-DD');
    setForm((state) => ({ ...state, applicationEndDate: dateFormat }));
  };
  const onAddRecruit = (e) => {
    e.preventDefault();
    console.log(form);
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
        concept: '',
        title: '',
        introduceText: '',
      }));
    };
  }, []);
  return (
    <AddRecruit
      form={form}
      onAddRecruit={onAddRecruit}
      onChange={onChange}
      onChangExStartDate={onChangExStartDate}
      onChangExEndDate={onChangExEndDate}
      onChangAppStartDate={onChangAppStartDate}
      onChangAppEndDate={onChangAppEndDate}
    />
  );
};

export default AddRecruitContainer;
