/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OpeningPage from './Components/OpeningPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from './Components/SignUpPage';
import LogInPage from './Components/LogIn';
import OTPage from './Components/Otp';
import Dashboard from './Components/Dashboard';
export type StackScreens = {
  OpeningPage: undefined;
  SignUpPage: undefined;
  LogInPage: undefined;
  OTPage: undefined;
  Dashboard: undefined;
}
const Stack = createNativeStackNavigator<StackScreens>();
const App = () => {
  useEffect(()=>{
    if (Platform.OS === 'android'){
      SplashScreen.hide();
    }
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpeningPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="OpeningPage" component={OpeningPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="OTPage" component={OTPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
