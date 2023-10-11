/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';

const LogInPage = () => {
  const [mobileno,setMobileNo] = useState('');
  const [OTP,setOTP] = useState('');
  const [check,setCheck] = useState(false);
  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`bg-[#1A87DD] h-72 rounded-b-16`}>
        <View style={tw`flex mt-24 ml-8 gap-2`}>
          <Text style={tw`text-white text-3xl font-bold`}>Login and start</Text>
          <Text style={tw`text-white text-3xl font-bold`}>Transferring</Text>
        </View>
      </View>
      <View style={tw`gap-8`}>
        <View style={tw`flex mt-24 gap-4`}>
          <View style={tw`flex ml-14`}>
            {check ? (<View>
              <Text style={tw`text-black`}>OTP</Text>
              <TextInput
                style={tw`border border-2 border-gray-100 p-2 mt-2 w-64 rounded-lg`}
                placeholder="Enter OTP"
                placeholderTextColor="gray"
                value={OTP}
                onChangeText={(text)=>setOTP(text)}
            />
            </View>) : (
              <View>
                <Text style={tw`text-black`}>Mobile Number</Text>
                <TextInput
                  style={tw`border border-2 border-gray-100 p-2 mt-2 w-64 rounded-lg`}
                  placeholder="Enter your mobile number"
                  placeholderTextColor="gray"
                  value={mobileno}
                  onChangeText={(text)=>setMobileNo(text)}
                />
              </View>
            )}
          </View>
        </View>
        <View style={tw`flex items-center gap-4`}>
          {check ? (<TouchableOpacity style={tw`bg-[#1A87DD] w-60 h-12 rounded-lg`}>
            <View style={tw`flex items-center mt-3.5`}>
              <Text style={tw`text-white`}>Verify OTP</Text>
            </View>
          </TouchableOpacity>) : (
          <TouchableOpacity style={tw`bg-[#1A87DD] w-60 h-12 rounded-lg`} onPress={()=>setCheck(true)}>
            <View style={tw`flex items-center mt-3.5`}>
              <Text style={tw`text-white`}>Get OTP</Text>
            </View>
          </TouchableOpacity>)}
          <View style={tw`mt-28`}>
            <TouchableOpacity>
              <Text style={tw`text-[#1A87DD]`}>Don't have an Account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LogInPage;
