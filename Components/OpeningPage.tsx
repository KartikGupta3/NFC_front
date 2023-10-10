/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import tw from 'twrnc';
const OpeningPage = () => {
  return (
    <ScrollView style={tw`bg-[#1A87DD]`}>
      <View style={tw`flex items-center mt-32 justify-center`}>
        <Image style={tw`w-96 h-96`} source={require('./Images/MainLogo.png')} />
      </View>
    </ScrollView>
  );
};
export default OpeningPage;
