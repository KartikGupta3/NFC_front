/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const ReceiveMoney = () => {
  const [amt, setAmt] = useState('');
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
            Receive Money
          </Text>
        </View>
        <View>
          <TextInput
            mode="outlined"
            style={{width: width * 0.8}}
            label="Enter Amount to be Received"
            value={amt}
            onChangeText={text => setAmt(text)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#1A87DD',
              height: height * 0.048,
              width: width * 0.3,
              borderRadius: 10,
            }}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Receive Money
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReceiveMoney;
