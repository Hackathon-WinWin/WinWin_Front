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
import ArtistProfilePage from './pages/artist/ArtistProfilePage';
import { checkArtistProfile } from './modules/profile';
import EntryPage from './pages/common/EntryPage';

const checkLogged = { isArtist: true };
const App = () => {
  const { check, checkArtistProfileSuccess } = useSelector(
    ({ auth, profile }) => ({
      check: auth.check,
      checkArtistProfileSuccess: profile.checkArtistProfileSuccess,
    })
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);
  useEffect(() => {
    dispatch(checkArtistProfile());
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<EntryPage />}>
        <Route path='/' element={<ArtistSigninPage />} />
        <Route path='/hotelSignin' element={<HotelSigninPage />} />
      </Route>
      <Route path='/signup/*' element={<MainPage />} />
      <Route path='checkArtistPhone' element={<PhoneCertificationPage />} />
      <Route path='checkBusiness' element={<BusinessCertificationPage />} />
      <Route path='/createArtist' element={<ArtistSignupPage />} />
      <Route path='/createHotel' element={<HotelSignupPage />} />
      {/* <Route
        path='/'
        element={check ? <div>로그인 후 페이지</div> : <MainPage />}
      /> */}
      {/* <Route path='signin' element={<SigninPage />}>
        <Route path='artist' element={<ArtistSigninPage />} />
        <Route path='hotel' element={<HotelSigninPage />} />
      </Route>

      <Route path='checkArtistPhone' element={<PhoneCertificationPage />} />
      <Route path='artistSignup' element={<ArtistSignupPage />} />
      <Route path='createArtistProfile' element={<ArtistProfilePage />} />

      <Route path='checkBusiness' element={<BusinessCertificationPage />} />
      <Route path='hotelSignup' element={<HotelSignupPage />} /> */}
    </Routes>
  );
};

export default App;
