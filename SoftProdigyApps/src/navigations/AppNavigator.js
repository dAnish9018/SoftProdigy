import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native'
import { DrawerNavigator, HomeNavigator ,BottomTabNavigator} from './SoftProdigyNavigator';
import Color from '../constant/Color';
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/SplashScreen';



const AppNavigator = (props) => {

  const didTryAL = useSelector((state) => state.auth.didTryLogin);
  console.log(''+didTryAL);

  useEffect(()=>{
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor(Color.ash)
  })

  return (
    <NavigationContainer>

      {/* <DrawerNavigator/> */}
          
     
       { !didTryAL && <SplashScreen />}
       { didTryAL && <DrawerNavigator/>}
    </NavigationContainer>
  );
 
};
export default AppNavigator;
