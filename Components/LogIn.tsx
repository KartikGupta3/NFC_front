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
import { StackScreens } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
type propsType = NativeStackScreenProps<StackScreens,'LogInPage'>
const LogInPage = (props:propsType) => {
  const [mobileno,setMobileNo] = useState('');
  const {navigation} = props;
  const Navigation = useNavigation();
  const GoToSignUp = () =>{
    navigation.navigate('SignUpPage');
  };
  const GoToOTP = () => {
    navigation.navigate('OTPage');
  };
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
          <Text style={tw`text-white text-3xl font-bold`}>Login and start</Text>
          <Text style={tw`text-white text-3xl font-bold`}>Transferring</Text>
        </View>
      </View>
      <View style={tw`gap-8`}>
        <View style={tw`flex mt-24 gap-4`}>
          <View style={tw`flex ml-8`}>
            <View>
              <Text style={tw`text-black`}>Mobile Number</Text>
              <TextInput
                style={tw`border border-2 border-gray-100 p-2 mt-2 w-72 rounded-lg`}
                placeholder="Enter your mobile number"
                placeholderTextColor="gray"
                value={mobileno}
                onChangeText={(text)=>setMobileNo(text)}
              />
            </View>
          </View>
        </View>
        <View style={tw`flex items-center gap-4`}>
          <TouchableOpacity style={tw`bg-[#1A87DD] w-76 h-12 rounded-lg`} onPress={GoToOTP}>
            <View style={tw`flex items-center mt-3.5`}>
              <Text style={tw`text-white`}>Get OTP</Text>
            </View>
          </TouchableOpacity>
          <View style={tw`mt-28`}>
            <TouchableOpacity onPress={GoToSignUp}>
              <Text style={tw`text-[#1A87DD]`}>Don't have an Account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LogInPage;
