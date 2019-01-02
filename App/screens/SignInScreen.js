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
export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'آی پارس مدیا',
  };

  render() {
    return (
      <ImageBackground source={{ uri: remote }} style={{width: '100%', height: '100%'}}>
      <Container style={styles.container}>
      <StatusBar barStyle="light-content" />
        <Content>
          <Item style={styles.imageitem}>
            <Image source={require('../assets/signin/1.png')} resizeMode = 'contain' style={{height:150,marginTop:70,marginBottom:30}}/>
          </Item>
          <Item style={[styles.imageitem,{ margin: 15 }]}>
          <Text style={styles.text}>
          {`به اپلیکیشن آی پارس مدیا خوش آمدید \nبرای ورود به اپلیکیشن ثبت نام کنید`}</Text>

          </Item>
          <Button iconRight style={styles.button} block rounded onPress={this._signInAsync}>
            <Icon name='logo-google' />
            <Text style={styles.text} > ورود با گوگل </Text>
          </Button>

          <Item iconRight rounded style={styles.inputbox}>
            <Icon type='FontAwesome' name='mobile' />
            <Input onChangeText={(text) => this.setState({phoneinput: text})} keyboardType='phone-pad' style={styles.input} placeholder='شماره موبایل را وارد کنید'/>
          </Item>

          <Button style={styles.button} block rounded onPress={this._Verify}>
            <Text style={styles.text} > ورود </Text>
          </Button>

          <TouchableOpacity onPress={this._signInAsync}>
          <Text style={[styles.text,{marginTop:10}]} > به عنوان مهمان وارد شوید </Text>
          </TouchableOpacity>
        </Content>
      </Container>
      </ImageBackground>

    );
  }

  _Verify = async () => {
    this.props.navigation.navigate('Verify',{ 'phone': this.state.phoneinput });
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
