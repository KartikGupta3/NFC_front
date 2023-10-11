/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Image, ScrollView, View, Text} from 'react-native';
import tw from 'twrnc';
const OpeningPage = () => {
  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`bg-[#1A87DD] h-[125] rounded-b-[100px]`}>
        <View style={tw`flex items-center mt-28`}>
          <Image style={tw`w-56 h-56`} source={require('./Images/FullLogo.png')} />
        </View>
      </View>
      <View style={tw`flex items-center mt-24 gap-6`}>
        <TouchableOpacity style={tw`bg-[#1A87DD] w-72 h-12 rounded-lg`}>
          <View style={tw`flex items-center mt-3.5`}>
            <Text style={tw`text-white`}>Create New Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-[#1A87DD]`}>Already have Account? Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default OpeningPage;
