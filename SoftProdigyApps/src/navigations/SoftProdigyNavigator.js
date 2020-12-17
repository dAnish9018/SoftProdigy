import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {DrawerContent} from '../components/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreeen from '../screens/ProfileScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ChatScreen from '../screens/ChatScreen';
import Color from '../constant/Color';

import Icon from 'react-native-vector-icons/FontAwesome';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.primary : '', //empty string mean default
  },
  headerTintColor: 'white',
};

//it is used to create what all screen will be in stack
//it take two params one for mapping the screen
//second to give style to header(toolbar)

const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Profile" component={ProfileScreeen} />
      <HomeStackNavigator.Screen name="Favourite" component={FavouriteScreen} />
      <HomeStackNavigator.Screen name="Chat" component={ChatScreen} />
    </HomeStackNavigator.Navigator>
  );
};

// const ProfileStackNavigator = createStackNavigator();
// export const ProfileNavigator = () => {
//   return (
//     <ProfileStackNavigator.Navigator screenOptions={{headerShown: false}}>
//       <ProfileStackNavigator.Screen name="profile" component={ProfileScreen} />
//     </ProfileStackNavigator.Navigator>
//   );
// };



// const BottomStackNavigator = createStackNavigator();
// export const BottomNavigator = () => {
//   return (
//     <BottomStackNavigator.Navigator screenOptions={{headerShown: false}}>
//       <BottomStackNavigator.Screen name="Flyer" component={FlyerScreen} />
//       <BottomStackNavigator.Screen
//         name="OfferList"
//         component={OfferListScreen}
//       />

//       <BottomStackNavigator.Screen
//         name="ForgotPassword"
//         component={ForgotPasswordScreen}
//       />
//     </BottomStackNavigator.Navigator>
//   );
// };

//drawerContent={(props) => <DrawerContent {...props} />}

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: 'black',
        paddingBottom:10,
        paddingTop:10,
        height:70

      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 16,
        //backgroundColor:'red'
        
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={25}  color={color}/>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreeen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={25}  color={color}/>
        ),
      }}
    />
    <Tab.Screen
      name="Favourite"
      component={FavouriteScreen}
      options={{
        tabBarLabel: 'Favourite',
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" size={25}  color={color}/>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color, size }) => (
          <Icon name="wechat" size={25}  color={color}/>
        ),
      }}
    />
  </Tab.Navigator>
  );
};



const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    initialRouteName="Home"
    drawerContentOptions={{
      activeTintColor: 'blue',
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={(props) => <DrawerContent {...props} />}
    
     >
      <Drawer.Screen name="Home" component={BottomTabNavigator}  />
      <Drawer.Screen name="Profile" component={ProfileScreeen} />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
    </Drawer.Navigator>
  );
};

