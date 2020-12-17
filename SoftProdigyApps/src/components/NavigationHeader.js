import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native'
import { Avatar } from 'react-native-paper';

const NavigationHeader = () => {

    return <View style={styles.screen}>
         <Avatar.Image size={200}  source={{  
          uri: 'https://cdn.shibe.online/shibes/4d032d17edf79b978eba3ed45163e88e89702e5d.jpg',
        }}  />
    </View>

}

const styles = StyleSheet.create({
    screen:{
        justifyContent:'center',
        alignItems:'center'
    }
})

export default NavigationHeader;