import React from 'react';
import { Dimensions, Image, StyleSheet, View,Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../constant/Color';
import NavigationHeader from './NavigationHeader';




export const DrawerContent = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            {/* <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Image
                style={styles.close}
                source={require('../assets/images/closeblack.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')}
            /> */}
            <NavigationHeader/>
          </View>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <Icon name="home" size={20}  color='white'/>
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              labelStyle={{color: 'white'}}
               />
            <DrawerItem
              icon={() => (
                <Icon name="user" size={20}  color='white'/>
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
              labelStyle={{color: 'white'}}
            />
            <DrawerItem
              icon={() => (
                <Icon name="heart" size={20}  color='white'/>
              )}
              label="Favourite"
              onPress={() => {
                props.navigation.navigate('Favourite');
              }}
              labelStyle={{color: 'white'}}

              
            />
            <DrawerItem
              icon={() => (
                <Icon name="wechat" size={20}  color='white'/>
              )}
              label="Chat"
              onPress={() => {
                props.navigation.navigate('Chat');
              }}
              labelStyle={{color: 'white'}}
            />
            
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingTop: 20,
    paddingLeft: 12,
  },
  close: {
    width: 30,
    height: 30,
  },
  logo: {
    width: Dimensions.get('window').width * 0.5,

    resizeMode: 'contain',
  },
  drawerSection: {
    marginTop: 20,
  },
});
