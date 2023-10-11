/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import LoginPage from './Components/OpeningPage';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(()=>{
    if (Platform.OS === 'android'){
      SplashScreen.hide();
    }
  });
  return <LoginPage />;
};
export default App;
