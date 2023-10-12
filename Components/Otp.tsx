/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const OTPage = () => {
  const [OTP,setOTP] = useState('');
  const [check,setCheck] = useState(false);
  const [resend,setResend] = useState(30);
  const Navigation = useNavigation();
  useEffect(()=>{
    const intervel = setInterval(()=>{
      if (resend === 0){
        clearInterval(intervel);
        setCheck(true);
      } else {
        setResend(resend - 1);
      }
    },1000);
    return () =>{
      clearInterval(intervel);
    };
  },[resend]);
  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`bg-[#1A87DD] h-72 rounded-b-16`}>
      <View style={tw`flex flex-row items-start ml-2 mt-2 `}>
        <TouchableOpacity style={tw`flex flex-row`} onPress={()=> Navigation.goBack()}>
          <Icon name="left" size={18} style={tw`text-white`} />
          <Text style={tw`text-white`}>Back</Text>
        </TouchableOpacity>
      </View>
        <View style={tw`flex mt-24 ml-8 gap-2`}>
          <Text style={tw`text-white text-3xl font-bold`}>Verify OTP</Text>
        </View>
      </View>
      <View style={tw`gap-8`}>
        <View style={tw`flex mt-24 gap-4`}>
          <View style={tw`flex ml-8`}>
              <View>
                <Text style={tw`text-black`}>Enter OTP</Text>
                <TextInput
                  style={tw`border border-2 border-gray-100 p-2 mt-2 w-72 rounded-lg`}
                  placeholder="Enter OTP"
                  placeholderTextColor="gray"
                  value={OTP}
                  onChangeText={(text)=>setOTP(text)}
                />
              </View>
          </View>
        </View>
        <View style={tw`flex items-center gap-4`}>
          <TouchableOpacity style={tw`bg-[#1A87DD] w-76 h-12 rounded-lg`}>
            <View style={tw`flex items-center mt-3.5`}>
              <Text style={tw`text-white`}>Verify OTP</Text>
            </View>
          </TouchableOpacity>
          <View style={tw``}>
            {check ? (
                <TouchableOpacity>
                    <Text style={tw`text-[#1A87DD] underline`}>Resend OTP</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity>
                    <Text style={tw`text-[#1A87DD]`}>Resend OTP in {resend}</Text>
                </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OTPage;
