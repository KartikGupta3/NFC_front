/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
const SignUpPage = () => (
  <ScrollView style={tw`bg-white`}>
    <View style={tw`bg-[#1A87DD] h-72 rounded-b-16`}>
      <View style={tw`flex mt-24 ml-8 gap-2`}>
        <Text style={tw`text-white text-3xl font-bold`}>SignUp and start</Text>
        <Text style={tw`text-white text-3xl font-bold`}>Transfering</Text>
      </View>
    </View>
    <View style={tw`gap-8`}>
      <View style={tw`flex mt-8 gap-4`}>
        <View style={tw`flex ml-14`}>
          <Text style={tw`text-black`}>First Name</Text>
          <TextInput
            style={tw`border border-2 border-gray-100 p-2 mt-2 w-64 rounded-lg`}
            placeholder="Enter your First Name"
            placeholderTextColor="gray"
          />
        </View>
        <View style={tw`flex ml-14`}>
          <Text style={tw`text-black`}>Last Name</Text>
          <TextInput
            style={tw`border border-2 border-gray-100 p-2 mt-2 w-64 rounded-lg`}
            placeholder="Enter your Last Name"
            placeholderTextColor="gray"
          />
        </View>
        <View style={tw`flex ml-14`}>
          <Text style={tw`text-black`}>Mobile Number</Text>
          <TextInput
            style={tw`border border-2 border-gray-100 p-2 mt-2 w-64 rounded-lg`}
            placeholder="Enter your mobile number"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={tw`flex items-center gap-4`}>
        <TouchableOpacity style={tw`bg-[#1A87DD] w-72 h-12 rounded-lg`}>
          <View style={tw`flex items-center mt-3.5`}>
            <Text style={tw`text-white`}>Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-[#1A87DD]`}>Already have Account? Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);
export default SignUpPage;
