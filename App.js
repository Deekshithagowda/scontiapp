import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, Linking} from 'react-native';
import BoxedShare from './src/Component/BoxedShare';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class App extends Component{
  render(){
    return(
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={() => {Linking.openURL('https://twitter.com/Deekshithamoha2')}}>
        
        </TouchableOpacity>
        <Text style={styles.TitleText}>Welcome to React Native Social Share </Text>
        
        <BoxedShare 
        WhatsappMessage="https://twitter.com/Deekshithamoha2" 
        FacebookShareURL="https://twitter.com/Deekshithamoha2" 
        FacebookShareMessage="Hey, I find great react-native component on github" 
        TwitterShareURL="https://twitter.com/Deekshithamoha2"
        TwitterShareMessage="Hey, I find great react-native component on github" 
        TwitterViaAccount="ugurr_demirel" 
        NativeShareTitle="React Native Social Share Buttons" 
        NativeShareMessage="Hey, I find great react-native component on github" 
        NativeShareURL="https://twitter.com/Deekshithamoha2"
        />
       
      </View>
    );
  }
}





const styles = StyleSheet.create({
  ViewStyle: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  TitleText: {
    fontSize: 22,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom: 20
  },
 
});