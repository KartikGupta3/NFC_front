/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const Profile = () => {
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
            padding: 20,
          }}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 18,
            columnGap: width * 0.05,
          }}>
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 50,
              backgroundColor: '#FAF9F6',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 38,
                fontWeight: 'bold',
                color: '#1A87DD',
              }}>
              K
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{rowGap: height * 0.01}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 27,
                }}>
                Kartik Gupta
              </Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="right"
                size={18}
                style={{
                  color: 'black',
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{borderWidth: 0.5, borderColor: '#F5F5F5', margin: 0}} />
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 18,
              columnGap: width * 0.05,
            }}>
            <View
              style={{
                width: 66,
                height: 66,
                borderRadius: 50,
                backgroundColor: '#FAF9F6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: '#1A87DD',
                }}>
                K
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{rowGap: height * 0.01}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                  }}>
                  Card
                </Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: '#F5F5F5',
                    margin: 0,
                    width: width * 0.72,
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 18,
              columnGap: width * 0.05,
            }}>
            <View
              style={{
                width: 66,
                height: 66,
                borderRadius: 50,
                backgroundColor: '#FAF9F6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: '#1A87DD',
                }}>
                K
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{rowGap: height * 0.01}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                  }}>
                  Support
                </Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: '#F5F5F5',
                    margin: 0,
                    width: width * 0.72,
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 18,
              columnGap: width * 0.05,
            }}>
            <View
              style={{
                width: 66,
                height: 66,
                borderRadius: 50,
                backgroundColor: '#FAF9F6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: '#1A87DD',
                }}>
                K
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{rowGap: height * 0.01}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                  }}>
                  About
                </Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: '#F5F5F5',
                    margin: 0,
                    width: width * 0.72,
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 18,
              columnGap: width * 0.05,
            }}>
            <View
              style={{
                width: 66,
                height: 66,
                borderRadius: 50,
                backgroundColor: '#FAF9F6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: '#1A87DD',
                }}>
                K
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{rowGap: height * 0.01}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                  }}>
                  FAQs
                </Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: '#F5F5F5',
                    margin: 0,
                    width: width * 0.72,
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
