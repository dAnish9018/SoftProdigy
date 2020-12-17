import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import CommonToolbar from '../components/CommonToolbar';

const FavouriteScreen = ({navigation}) => {
    return <View style={styles.screen}>
         <CommonToolbar home  navigation={navigation} title='Favourite' style={styles.toolbar}/>
    </View>
}

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    toolbar:{color:'white',textAlign:"center",fontWeight:'bold',fontSize:18}
})

export default FavouriteScreen

