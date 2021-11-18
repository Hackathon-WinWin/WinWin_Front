import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
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

const check = { isArtist: false };
const App = () => {
  // const { check } = useSelector(({ auth, profile }) => ({
  //   check: auth.check,
  // }));
  // const dispatch = useDispatch();

  return (
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
        path='/main'
        element={
          <RequireAuth>
            <RequireProfile isArtist={check.isArtist}>
              <MainPage />
            </RequireProfile>
          </RequireAuth>
        }
      />
      <Route path='*' element={<div>Not Found.</div>} />
    </Routes>
  );
};

export default App;
