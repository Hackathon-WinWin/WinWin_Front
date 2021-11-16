import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArtistSigninPage from './pages/artist/ArtistSigninPage';
import MainPage from './pages/MainPage';
import HotelSignupPage from './pages/hotel/HotelSignupPage';
import SigninPage from './pages/SigninPage';
import HotelSigninPage from './pages/hotel/HotelSigninPage';
import BusinessCertificationPage from './pages/hotel/BusinessCertificationPage';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoggedIn } from './modules/auth';
import ArtistSignupPage from './pages/artist/ArtistSignupPage';
import PhoneCertificationPage from './pages/artist/PhoneCertificationPage';

const App = () => {
  const { check } = useSelector(({ auth }) => ({ check: auth.check }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);
  console.log(check);
  return (
    <Routes>
      <Route
        path='/'
        element={check ? <div>로그인 후 페이지</div> : <MainPage />}
      />
      <Route path='signin' element={<SigninPage />}>
        <Route path='artist' element={<ArtistSigninPage />} />
        <Route path='hotel' element={<HotelSigninPage />} />
      </Route>
      {/* Artist */}
      <Route path='checkArtistPhone' element={<PhoneCertificationPage />} />
      <Route path='artistSignup' element={<ArtistSignupPage />} />
      {/* Hotel */}
      <Route path='checkBusiness' element={<BusinessCertificationPage />} />
      <Route path='hotelSignup' element={<HotelSignupPage />} />
    </Routes>
  );
};

export default App;
