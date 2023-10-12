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
type propsType = NativeStackScreenProps<StackScreens,'SignUpPage'>
const SignUpPage = (props: propsType) => {
  const [firstname,setName] = useState('');
  const [regno,setRegNo] = useState('');
  const [mobileno,setMobileNo] = useState('');
  const {navigation} = props;
  const Navigation = useNavigation();
  const GoToLogIn = () =>{
    navigation.navigate('LogInPage');
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
        <View style={tw`flex mt-20 ml-8 gap-2`}>
          <Text style={tw`text-white text-3xl font-bold`}>SignUp and start</Text>
          <Text style={tw`text-white text-3xl font-bold`}>Transfering</Text>
        </View>
      </View>
      <View style={tw`gap-8`}>
        <View style={tw`flex mt-8 gap-4`}>
          <View style={tw`flex ml-8`}>
            <Text style={tw`text-black`}>Name</Text>
            <TextInput
              style={tw`border border-2 border-gray-100 p-2 mt-2 w-72 rounded-lg`}
              placeholder="Enter your First Name"
              placeholderTextColor="gray"
              value={firstname}
              onChangeText={(text)=>setName(text)}
            />
          </View>
          <View style={tw`flex ml-8`}>
            <Text style={tw`text-black`}>Reg No.</Text>
            <TextInput
              style={tw`border border-2 border-gray-100 p-2 mt-2 w-72 rounded-lg`}
              placeholder="Enter your Last Name"
              placeholderTextColor="gray"
              value={regno}
              onChangeText={(text)=>setRegNo(text)}
            />
          </View>
          <View style={tw`flex ml-8`}>
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
        <View style={tw`flex items-center gap-4`}>
          <TouchableOpacity style={tw`bg-[#1A87DD] w-76 h-12 rounded-lg`}>
            <View style={tw`flex items-center mt-3.5`}>
              <Text style={tw`text-white`}>Register</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={GoToLogIn}>
            <Text style={tw`text-[#1A87DD]`}>Already have Account? Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUpPage;
