/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Image, ScrollView, View, Text } from 'react-native';
import tw from 'twrnc';
import { StackScreens } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type propsType = NativeStackScreenProps<StackScreens,'OpeningPage'>
const OpeningPage = (props:propsType) => {
  const {navigation} = props;
  const GoToSignUp = () =>{
    navigation.navigate('SignUpPage');
  };
  const GoToLogIn = () =>{
    navigation.navigate('LogInPage');
  };
  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`bg-[#1A87DD] h-125 rounded-b-28`}>
        <View style={tw`flex items-center mt-28`}>
          <Image style={tw`w-56 h-56`} source={require('./Images/FullLogo.png')} />
        </View>
      </View>
      <View style={tw`flex items-center mt-24 gap-6`}>
        <TouchableOpacity style={tw`bg-[#1A87DD] w-72 h-12 rounded-lg`} onPress={GoToSignUp}>
          <View style={tw`flex items-center mt-3.5`}>
            <Text style={tw`text-white`}>Create New Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={GoToLogIn}>
          <Text style={tw`text-[#1A87DD]`}>Already have an Account? Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OpeningPage;

