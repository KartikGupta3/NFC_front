/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {StackScreens} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type propsType = NativeStackScreenProps<StackScreens, 'OpeningPage'>;

const OpeningPage = (props: propsType) => {
  const {navigation} = props;

  const GoToSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  const GoToLogIn = () => {
    navigation.navigate('LogInPage');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#1A87DD" />
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logoImage}
            source={require('./Images/FullLogo.png')}
          />
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={GoToSignUp}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Create New Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={GoToLogIn}>
          <Text style={styles.loginText}>Already have an Account? Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#1A87DD',
    height: height * 0.6,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: width * 0.54,
    height: height * 0.2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.15,
    rowGap: 12,
  },
  button: {
    backgroundColor: '#1A87DD',
    height: height * 0.06,
    width: width * 0.7,
    borderRadius: 10,
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  loginText: {
    color: '#1A87DD',
  },
});

export default OpeningPage;
