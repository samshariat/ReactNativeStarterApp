import React,{Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  View,
  ActivityIndicator
} from 'react-native';

import { Text, Container, Content, Icon, Item, Input, Button } from 'native-base';
import styles from '../styles/Styles';

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
