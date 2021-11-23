import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HotelSignupPage from './pages/hotel/HotelSignupPage';
import BusinessCertificationPage from './pages/hotel/BusinessCertificationPage';
import { useDispatch, useSelector } from 'react-redux';
import ArtistSignupPage from './pages/artist/ArtistSignupPage';
import PhoneCertificationPage from './pages/artist/PhoneCertificationPage';
import ArtistProfilePage from './pages/artist/ArtistProfilePage';
import HotelProfilePage from './pages/hotel/HotelProfilePage';
import EntryPage from './pages/common/EntryPage';
import Signup from './components/common/Signup';
import RequireAuth from './routes/RequireAuth';
import RequireProfile from './routes/RequireProfile';
import ArtistMyPage from './pages/artist/mypage/ArtistMyPage';
import { createGlobalStyle } from 'styled-components';
import EditArtistProfilePage from './pages/artist/mypage/EditArtistProfilePage';
import { useEffect } from 'react';
import { checkLoggedIn } from './modules/auth';
import HotelMyPage from './pages/hotel/mypage/HotelMyPage';
import axios from 'axios';
import ArtistMainPage from './pages/artist/ArtistMainPage';
import HotelMainPage from './pages/hotel/HotelMainPage';
import RecruitmentPage from './pages/hotel/RecruitmentPage';
import AddRecruitContainer from './containers/hotel/recruitment/AddRecruitContainer';

// axios.defaults.baseURL = 'http://3.12.248.32:8000';
axios.defaults.withCredentials = true;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    word-break : keep-all
  }
`;
const App = () => {
  const { check } = useSelector(({ auth }) => ({
    check: auth.check,
  }));
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkLoggedIn());
  // }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkArtistPhone' element={<PhoneCertificationPage />} />
        <Route path='/checkBusiness' element={<BusinessCertificationPage />} />
        <Route path='/singupArtist' element={<ArtistSignupPage />} />
        <Route path='/signupHotel' element={<HotelSignupPage />} />
        <Route path='/createArtistProfile' element={<ArtistProfilePage />} />
        <Route path='/createHotelProfile' element={<HotelProfilePage />} />
        <Route
          path='/myPage'
          element={check && check.isArtist ? <ArtistMyPage /> : <HotelMyPage />}
        />
        <Route path='/editProfile' element={<EditArtistProfilePage />} />
        <Route
          path='/main'
          element={
            check && check.isArtist ? <ArtistMainPage /> : <HotelMainPage />
          }
        />
        <Route path='/recruit' element={<RecruitmentPage />} />
        <Route path='/createRecruit' element={<AddRecruitContainer />} />
        <Route path='*' element={<div>Not Found.</div>} />
      </Routes>
    </>
  );
};

export default App;
