/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { StackScreens } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

type propsType = NativeStackScreenProps<StackScreens, 'LogInPage'>
const { width, height } = Dimensions.get('screen');

const LogInPage = (props: propsType) => {
  const [mobileno, setMobileNo] = useState('');
  const { navigation } = props;
  const Navigation = useNavigation();

  const GoToSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  const GoToOTP = () => {
    navigation.navigate('OTPage');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <TouchableOpacity style={styles.backButtonText} onPress={() => Navigation.goBack()}>
            <Icon name="left" size={18} style={styles.backButtonIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login and start</Text>
          <Text style={styles.title}>Transferring</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.mobileNumberContainer}>
          <TextInput
            style={styles.input}
            mode = "outlined"
            label="Enter your mobile number"
            value={mobileno}
            onChangeText={(text) => setMobileNo(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.getOtpButton} onPress={GoToOTP}>
            <View style={styles.getOtpButtonTextContainer}>
              <Text style={styles.getOtpButtonText}>Get OTP</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.signUpLink}>
            <TouchableOpacity onPress={GoToSignUp}>
              <Text style={styles.signUpText}>Don't have an Account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#1A87DD',
    height: height * 0.40,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  backButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  backButtonIcon: {
    color: 'white',
  },
  backButtonText: {
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: width * 0.1,
    marginBottom: height * 0.18,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  rowContainer: {
    rowGap: 32,
    marginTop: height * 0.1,
    alignItems: 'center',
  },
  mobileNumberContainer: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    color: 'black',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.7,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    rowGap: 16,
  },
  getOtpButton: {
    backgroundColor: '#1A87DD',
    height: height * 0.055,
    width: width * 0.7,
    borderRadius: 10,
  },
  getOtpButtonTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getOtpButtonText: {
    color: 'white',
  },
  signUpLink: {
    flex: 1,
    alignItems: 'center',
  },
  signUpText: {
    color: '#1A87DD',
  },
});

export default LogInPage;
