import React,{Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  AsyncStorage,
  View,
  Image
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from '../styles/Styles';

export default class VideosScreen extends React.Component {
  static navigationOptions = {
    title: 'فیلم های آموزشی',
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
        </Header>
          <Card>
            <CardItem cardBody>
              <Image source={require('../assets/signin/1.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Right>

            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
