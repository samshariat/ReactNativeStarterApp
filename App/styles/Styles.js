import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  imageitem : {
    borderBottomWidth:0,
    justifyContent:'center'

  },
  input : {
    textAlign: 'center'
  },
  button : {
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    color: '#ffffff',
  },
  inputbox : {
    backgroundColor:'#ffffff',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    color: '#333333',
  },
  slideshow : {
    textAlign:'right',
    lineHeight:28,
  },
  Header :{
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    writingDirection: 'rtl',
    textAlign:'center',
    lineHeight:28,
  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {

  },
  info: {
    flex: 0.5,
    alignItems: 'center',
    padding: 40
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 20,
  },
});
