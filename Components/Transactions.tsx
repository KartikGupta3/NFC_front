/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const Transactions = () => {
  const Navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Icon
          name="arrowleft"
          size={30}
          style={{
            color: 'black',
            marginLeft: width * 0.04,
            marginTop: height * 0.008,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: height * 0.05,
          marginLeft: width * 0.08,
          rowGap: height * 0.05,
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            Transactions
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Transactions;
