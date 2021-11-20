import React from 'react';
import { useSelector } from 'react-redux';
import BottomTab from '../../components/common/BottomTab';

const BottomTabContainer = () => {
  const { check } = useSelector(({ auth }) => ({
    check: auth.check,
  }));
  return <BottomTab isArtist={check.isArtist} />;
};

export default BottomTabContainer;
