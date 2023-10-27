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
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackScreens } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('screen');
type propsType = NativeStackScreenProps<StackScreens, 'SignUpPage'>;

const SignUpPage = (props: propsType) => {
  const [firstname, setName] = useState('');
  const [regno, setRegNo] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const { navigation } = props;

  const Navigation = useNavigation();

  const GoToLogIn = () => {
    navigation.navigate('LogInPage');
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
          <Text style={styles.title}>Sign Up and Start</Text>
          <Text style={styles.title}>Transferring</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              style={styles.input}
              label="Full Name"
              value={firstname}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              style={styles.input}
              label="Registration Number"
              value={regno}
              onChangeText={(text) => setRegNo(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode = "outlined"
              style={styles.input}
              label="Mobile number"
              value={mobileno}
              onChangeText={(text) => setMobileNo(text)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerButton} onPress={GoToLogIn}>
            <View style={styles.registerButtonTextContainer}>
              <Text style={styles.registerButtonText}>Register</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.loginLink}>
            <TouchableOpacity onPress={GoToLogIn}>
              <Text style={styles.loginText}>Already have an Account? Log In</Text>
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
    flex:1,
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
    rowGap: height * 0.04,
  },
  formContainer: {
    rowGap: 20,
    marginTop: height * 0.05,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: width * 0.7,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    rowGap: 16,
  },
  registerButton: {
    backgroundColor: '#1A87DD',
    height: height * 0.055,
    width: width * 0.7,
    borderRadius: 10,
  },
  registerButtonTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: 'white',
  },
  loginLink: {
    flex: 1,
    alignItems: 'center',
  },
  loginText: {
    color: '#1A87DD',
  },
});

export default SignUpPage;
