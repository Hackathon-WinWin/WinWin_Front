import React from 'react';
import BottomTabContainer from '../../containers/common/BottomTabContainer';

const CommunityPage = () => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + '/assets/communityPage.png'}
        alt='community'
      />
      <BottomTabContainer />
    </>
  );
};

export default CommunityPage;
