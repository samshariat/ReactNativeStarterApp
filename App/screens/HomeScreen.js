import React,{Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  Alert
} from 'react-native';

import Slideshow from '../components/SlideShow';
import { Header, Left, Text, Container, Content, Icon, Item, Input, Button } from 'native-base';
import styles from '../styles/Styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'صفحه اصلی'
  };
  render() {
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
        </Header>
        <Content>
        <Slideshow
          dataSource={[
            { url:'http://rafa-group.nsi-co.com/images/bg1.jpg' ,title: 'آموزش نمایش درصد باتری در آیفون',caption: 'آموزش'},
            { url:'http://rafa-group.nsi-co.com/images/bg2.jpg' ,title: 'آموزش ساخت اپل آی دی',caption: 'مقالات'},
            { url:'http://rafa-group.nsi-co.com/images/bg3.jpg' ,title: 'فروش گیفت کارت آیتیونز',caption: 'فروشگاه'},
            { url:'http://rafa-group.nsi-co.com/images/bg4.jpg' ,title: 'اپلیکیشن نمایش متن و ترجمه آهنگ',caption: 'معرفی اپلیکیشن'},
            { url:'http://rafa-group.nsi-co.com/images/bg5.jpg' ,title: 'تبلیغات',caption: 'تبلیغات'}
          ]} containerStyle={styles.slideshow} height={250} onPress={this._SliderPress}/>
        <Button block success onPress={this._showMoreApp} style={{margin:10}}>
          <Text>نمایش همه ی فیلم های آموزشی</Text>
        </Button>

        <Button rounded light onPress={this._signOutAsync}>
          <Text>خروج</Text>
        </Button>
        </Content>
      </Container>
    );
  }

  __SliderPress = (image,index) =>{
    Alert.show('hello');
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Videos');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
