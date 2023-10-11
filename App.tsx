/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OpeningPage from './Components/OpeningPage';
const App = () => {
  useEffect(()=>{
    if (Platform.OS === 'android'){
      SplashScreen.hide();
    }
  });
  return <OpeningPage />;
};
export default App;
