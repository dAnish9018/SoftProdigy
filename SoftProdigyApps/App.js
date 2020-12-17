

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigations/AppNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'
import HomeReducer from './src/store/reducers/home'
import authReducer from './src/store/reducers/auth'

const rootReducer = combineReducers({
      home:HomeReducer,
      auth:authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
    </SafeAreaView>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
