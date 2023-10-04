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
const VerifyOTP = () => (
  <ScrollView style={tw`bg-[#051726]`}>
    <View style={tw`flex items-center mt-24`}>
      <Text style={tw`text-white text-3xl`}>Verify OTP</Text>
    </View>
    <View style={tw`gap-4`}>
      <View style={tw`flex flex-row items-center justify-center mt-16 gap-2`}>
        <TextInput
          style={tw`bg-[#ffffff] rounded-xl w-16 h-12 pl-4`}
          placeholder=""
        />
        <TextInput
          style={tw`bg-[#ffffff] rounded-xl w-16 h-12 pl-4`}
          placeholder=""
        />
        <TextInput
          style={tw`bg-[#ffffff] rounded-xl w-16 h-12 pl-4`}
          placeholder=""
        />
        <TextInput
          style={tw`bg-[#ffffff] rounded-xl w-16 h-12 pl-4`}
          placeholder=""
        />
      </View>
      <View style={tw`flex items-center`}>
        <TouchableOpacity
          style={tw`bg-[#ffffff] flex items-center mt-4 rounded-xl w-24 h-12`}
          onPress={() => {}}>
          <Text style={tw`text-black font-bold text-center mt-3`}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);
export default VerifyOTP;
