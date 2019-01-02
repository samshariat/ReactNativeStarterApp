import React,{Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
  Image,
  Alert,
  Text
} from 'react-native';

import { createDrawerNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Container, Content, Icon, Item, Input, Button } from 'native-base';
import AppIntro from './components/AppIntro';
import * as Screens from './screens';
import styles from './styles/Styles';

const AppStack = createDrawerNavigator({ Home: Screens.HomeScreen, Videos: Screens.VideosScreen });
const AuthStack = createStackNavigator({ SignIn: Screens.SignInScreen, Verify: Screens.VerificationScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Screens.AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
