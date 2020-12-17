import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'


const CommonToolbar = (props) => {

    return <View style={styles.container}>
       {
           props.home? <Icon name="menu" size={30}  color='white' onPress={()=>{props.navigation.toggleDrawer();}} />:<AntIcon name="arrowleft" size={30}  color='white' onPress={()=>{props.navigation.goBack()}} />
       }
       
        <Text style={{flex:1,...props.style}}>{props.title}</Text>
       
    </View>

}

const styles = StyleSheet.create({
    container:{
        //marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'black',
        //backgroundColor:Color.ash,
        padding:20,
        paddingVertical:15,
        
    }
})

export default CommonToolbar;