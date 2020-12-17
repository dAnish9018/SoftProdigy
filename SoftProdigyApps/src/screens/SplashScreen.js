import React, { useCallback, useEffect } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth'


const SplashScreen = () => {

    const dispatch = useDispatch();

    const tryLogin = useCallback(async () => {

          dispatch(authActions.setDidTryAL()); 
      }, [dispatch]);


     useEffect(() => {

    const timeoutHandle = setTimeout(() => {
      // Add your logic for the transition

      tryLogin();
      
    }, 3000);
    return () => {
      console.log('unmount');
      clearTimeout(timeoutHandle);
    };
  });

    return <View style={styles.Screen}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>SoftProdigy</Text>
    </View>

}

const styles = StyleSheet.create({
    Screen:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:"center"
    }
})

export default SplashScreen;