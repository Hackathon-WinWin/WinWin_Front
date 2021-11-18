import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HotelSignupPage from './pages/hotel/HotelSignupPage';
import BusinessCertificationPage from './pages/hotel/BusinessCertificationPage';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoggedIn } from './modules/auth';
import ArtistSignupPage from './pages/artist/ArtistSignupPage';
import PhoneCertificationPage from './pages/artist/PhoneCertificationPage';
import ArtistProfilePage from './pages/artist/ArtistProfilePage';
import EntryPage from './pages/common/EntryPage';
import Signup from './components/common/Signup';
import { checkArtistProfile } from './modules/profile';

const checkLogged = { isArtist: true };
const App = () => {
  const { check } = useSelector(({ auth, profile }) => ({
    check: auth.check,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, [dispatch]);
  useEffect(() => {
    if (checkLogged) {
      if (checkLogged.isArtist) {
        dispatch(checkArtistProfile());
      } else {
        // dispatch(checkHotelProfile)
      }
    }
  });
  return (
    <Routes>
      <Route path='/' element={<EntryPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/checkArtistPhone' element={<PhoneCertificationPage />} />
      <Route path='/checkBusiness' element={<BusinessCertificationPage />} />
      <Route path='/singupArtist' element={<ArtistSignupPage />} />
      <Route path='/signupHotel' element={<HotelSignupPage />} />
      <Route path='*' element={<div>Not Found.</div>} />
    </Routes>
  );
};

export default App;
