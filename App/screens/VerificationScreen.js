import React,{Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  Image,
  TouchableOpacity
} from 'react-native';

import { H3, Thumbnail, Text, Container, Content, Icon, Item, Input, Button } from 'native-base';
import styles from '../styles/Styles';

const remote = 'http://rafa-group.nsi-co.com/bg1.jpg';

export default class VerificationScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'آی پارس مدیا',
  };

  render() {
    const { navigation } = this.props;
    const phonenumber = navigation.getParam('phone', '0');
    return (
      <ImageBackground source={{ uri: remote }} style={{width: '100%', height: '100%'}}>
      <Container style={styles.container}>
      <StatusBar barStyle="light-content" />
        <Content>
          <Item style={styles.imageitem}>
            <Image source={require('../assets/signin/1.png')} resizeMode = 'contain' style={{height:150,marginTop:70,marginBottom:30}}/>
          </Item>
          <Item style={[styles.imageitem,{ margin: 15 }]}>
          <Text style={styles.text}>{`کد ۴ رقمی ارسال شده برای شماره موبایل\n`}
          {phonenumber}{` را وارد نمایید `}</Text>
          </Item>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.text}> تغییر شماره موبایل ؟ </Text>
          </TouchableOpacity>

          <Item iconRight rounded style={styles.inputbox}>
            <Icon type='FontAwesome' name='mobile' />
            <Input keyboardType='phone-pad' style={styles.input} placeholder='کد فعالسازی را وارد کنید'/>
          </Item>

          <Button style={styles.button} block rounded onPress={this._signInAsync}>
            <Text style={styles.text} > ورود </Text>
          </Button>

          <TouchableOpacity onPress={this._signInAsync}>
          <Text style={[styles.text,{marginTop:10}]} > کد فعالسازی را دریافت نکرده ای ؟ </Text>
          </TouchableOpacity>
        </Content>
      </Container>
      </ImageBackground>

    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
