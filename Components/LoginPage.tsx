/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import tw from 'twrnc';
const LoginPage: React.FC<LoginPageProps> = () => (
  <ScrollView style={tw`bg-[#051726]`}>
    <View style={tw`flex items-center mt-24`}>
      <Image style={tw`w-32 h-32`} source={require('./Images/FullLogo.png')} />
    </View>
    <View style={tw`flex items-center mt-24 gap-4`}>
      <Text style={tw`text-white text-base`}>Sign In</Text>
      <TextInput
        style={tw`bg-[#ffffff] rounded-xl w-68 h-12 pl-4`}
        placeholder="Enter your mobile number"
      />
      <TouchableOpacity
        style={tw`bg-[#ffffff] flex mt-4 rounded-xl w-24 h-12`}
        onPress={() => navigation.navigate('Verify OTP')}>
        <Text style={tw`text-black font-bold text-center mt-3`}>GET OTP</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
export default LoginPage;
