import React from 'react';
import BottomTabContainer from '../../containers/common/BottomTabContainer';
import HotelStatusContainer from '../../containers/hotel/status/HotelStatusContainer';

const HotelStatusPage = () => {
  return (
    <>
      <HotelStatusContainer />
      <BottomTabContainer />
    </>
  );
};

export default HotelStatusPage;
