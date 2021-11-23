import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import SplashScreen from 'react-native-splash-screen';
import ShopByCategory from "./Src/Screens/ShopByCategory";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigation from "./Src/Route/HomeTabNavigation";
import AuthStack from "./Src/Route/AuthStackNavigation";
import DrawerNavigator from "./Src/Route/DrawerNavigation";
import { Provider } from 'react-redux';
import { configureStore } from "./Src/Store";
import DataManager from "./Src/Support/DataManager";
import Firebase from "@react-native-firebase/app";
import PushNotification from "react-native-push-notification";
import { setFcmTokenAction } from "./Src/Store/Actions/AuthenticationAction";
import SetUp from "./Src/Route/SetUp";
let fcm_token = ''
const store = configureStore();
const Stack = createStackNavigator();
const App = () => {

  const [signedIn, setSignedIn] = useState(null)


  return (
    <Provider store={store}>
      <SetUp/>
    </Provider>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
