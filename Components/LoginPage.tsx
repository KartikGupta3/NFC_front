/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
const LoginPage = () => (
  <ScrollView style={tw`bg-[#254F69]`}>
    <View style={tw`flex items-center mt-20`}>
      <Text style={tw`text-white text-3xl`}>Sign In</Text>
    </View>
    <View style={tw`flex items-center mt-48 gap-2`}>
      <Text style={tw`text-white text-base mr-16`}>
        Enter your mobile number
      </Text>
      <TextInput
        style={tw`bg-[#ffffff] rounded-xl w-64 h-12 pl-4`}
        placeholder="Enter Here"
      />
      <TouchableOpacity
        style={tw`bg-[#ffffff] flex mt-4 rounded-xl w-24 h-12`}
        onPress={() => {}}>
        <Text style={tw`text-black font-bold text-center mt-3`}>GET OTP</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
export default LoginPage;
