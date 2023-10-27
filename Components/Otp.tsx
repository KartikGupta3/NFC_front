/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackScreens } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('screen');
type propsType = NativeStackScreenProps<StackScreens,'OTPage'>

const OTPage = (props: propsType) => {
  const [OTP, setOTP] = useState('');
  const [check, setCheck] = useState(false);
  const [resend, setResend] = useState(30);

  const Navigation = useNavigation();
  const { navigation } = props;

  const GoDashboard = () => {
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (resend === 0) {
        clearInterval(interval);
        setCheck(true);
      } else {
        setResend(resend - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [resend]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <TouchableOpacity style={styles.backButtonText} onPress={() => Navigation.goBack()}>
            <Icon name="left" size={18} style={styles.backButtonIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Verify OTP and</Text>
          <Text style={styles.title}>Get Started</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.otpContainer}>
          <TextInput
            mode="outlined"
            style={styles.input}
            label="Enter OTP"
            value={OTP}
            onChangeText={(text) => setOTP(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.verifyButton} onPress={GoDashboard}>
            <View style={styles.verifyButtonTextContainer}>
              <Text style={styles.verifyButtonText}>Verify OTP</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.resendLink}>
            {check ? (
              <TouchableOpacity>
                <Text style={styles.resendText}>Resend OTP</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text style={styles.resendText}>Resend OTP in {resend}</Text>
              </TouchableOpacity>
            )}
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
  otpContainer: {
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
  verifyButton: {
    backgroundColor: '#1A87DD',
    height: height * 0.055,
    width: width * 0.7,
    borderRadius: 10,
  },
  verifyButtonTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    color: 'white',
  },
  resendLink: {
    flex: 1,
    alignItems: 'center',
  },
  resendText: {
    color: '#1A87DD',
  },
});

export default OTPage;
