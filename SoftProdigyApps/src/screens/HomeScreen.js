import React,{useCallback,useEffect,useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, ToastAndroid,FlatList, Image, Dimensions, ActivityIndicator,ScrollView, BackHandler, Alert} from 'react-native';
import CommonToolbar from '../components/CommonToolbar';
import {useDispatch, useSelector} from 'react-redux';
import * as homeAction from '../store/actions/home'
import { SliderBox } from "react-native-image-slider-box";
import Color from '../constant/Color';


const HomeScreen = ({navigation}) => {
    
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState();
    const carouselImagesList = useSelector(
        (state) => state.home.carouselImages,
      )
      const categoryImagesList = useSelector(
        (state) => state.home.categoryImages,
      )



    const fetchCarouselImages = useCallback(async () => {
        
        try {
          setIsLoading(true);
          await dispatch(homeAction.fetchCarouselImages());
        } catch (err) {
          console.log(err);
          ToastAndroid.show(err.message, ToastAndroid.SHORT);
        }
    
        try {
          setIsLoading(true);
          await dispatch(homeAction.fetchCategoriesList());
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          ToastAndroid.show(err.message, ToastAndroid.SHORT);
        }
      }, [dispatch, setIsLoading]);
    
      useEffect(() => {
     
        fetchCarouselImages();
      }, [fetchCarouselImages]);

      useEffect(() => {
        const backAction = () => {
          
          if (navigation.isFocused()) {
            Alert.alert('SoftProdigyApps!', 'Are you sure you want to Exit?', [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',  
              },
              {text: 'YES', onPress: () => BackHandler.exitApp()},
            ]);
            return true;
          }
    
          console.log('HomeScreen');
    
          return false;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        // return () => {
        //   BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
        // };
        return () => backHandler.remove('hardwareBackPress', backAction);
      }, [])

      const renderCategories = ({item, index}) => {
        return (
         <Image 
         style={{width:200,height:200,margin:0,flex:1,margin:4}}
         source={{  
            uri: item,
          }}
          resizeMode='cover'
          />
        );
      };

      const loader = (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={Color.accent} size="large" />
        </View>
      );

      

    return <View style={styles.screen}>
        <CommonToolbar home navigation={navigation} title='SoftProdigy Apps' style={styles.toolbar}/>
        {
        !isLoading?
        <ScrollView>
        <View>
        <SliderBox images={carouselImagesList}
          autoplay={true}
         circleLoop={true}
         //parentWidth={Dimensions.get('window').width}
         resizeMode={'stretch'}
         />
       <FlatList
                    columnWrapperStyle={{flex: 1,}}
                    data={categoryImagesList}
                    renderItem={renderCategories}
                    keyExtractor={(item) => item}
                    numColumns={Math.ceil((Dimensions.get('window').width-16)/200)}
                  />
        </View>
        </ScrollView>:loader
        }
    </View>
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    toolbar:{color:'white',textAlign:"center",fontWeight:'bold',fontSize:18}
})

export default HomeScreen

