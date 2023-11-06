/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StackScreens} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
const {width, height} = Dimensions.get('screen');
type propsType = NativeStackScreenProps<StackScreens, 'Dashboard'>;

const Dashboard = (props: propsType) => {
  const {navigation} = props;
  const goToSendMoney = () => {
    navigation.navigate('SendMoney');
  };
  const goToReceiveMoney = () => {
    navigation.navigate('ReceiveMoney');
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('./Images/Header.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.row}>
          <View>
            <Text style={styles.header}>Dashboard</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.userInfo}>Hi, Kartik</Text>
            <Text style={styles.totalBalance}>Total Balance</Text>
            <Text style={styles.totalBalanceAmount}>$124.80</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.header1}>
        <View style={styles.actionButton}>
          <TouchableOpacity
            style={styles.actionButtonContent}
            onPress={goToSendMoney}>
            <View style={styles.actionButtonText}>
              <Icon
                name="caretup"
                size={30}
                style={{
                  color: 'black',
                  marginLeft: width * 0.04,
                  marginTop: height * 0.005,
                }}
              />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Send Money
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToReceiveMoney}
            style={{
              backgroundColor: '#1A87DD',
              height: 48,
              width: width * 0.44,
              borderRadius: 10,
            }}>
            <View style={styles.actionButtonText}>
              <Icon
                name="caretdown"
                size={30}
                style={styles.lastTransactionsHeader}
              />
              <Text style={styles.viewAllLink}>Receive Money</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.header3}>
          <Text style={styles.lastransaction}>Your Last Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.view}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./Images/NoTransaction.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    height: height * 0.38,
  },
  row: {
    rowGap: height * 0.1,
    marginLeft: width * 0.08,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: height * 0.05,
  },
  row1: {
    rowGap: height * 0.012,
  },
  userInfo: {
    color: 'white',
    fontSize: 18,
  },
  totalBalance: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
  },
  totalBalanceAmount: {
    color: 'white',
    fontSize: 42,
    fontWeight: '800',
  },
  header1: {
    flex: 1,
    flexDirection: 'column',
    rowGap: height * 0.05,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    columnGap: width * 0.05,
    justifyContent: 'center',
    marginTop: height * 0.03,
  },
  actionButtonContent: {
    backgroundColor: '#F8BB18',
    height: 48,
    width: width * 0.4,
    borderRadius: 10,
  },
  actionButtonText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  lastTransactionsHeader: {
    color: 'white',
    marginLeft: width * 0.04,
    marginBottom: height * 0.005,
  },
  viewAllLink: {
    color: 'white',
    fontWeight: 'bold',
  },
  header3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: width * 0.35,
  },
  lastransaction: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  view: {
    color: '#1A87DD',
    fontSize: 15,
  },
});

export default Dashboard;
