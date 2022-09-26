import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../Theme/Theme'

export function Help() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.holder}>
        <Image source={require('../../assets/images/information.png')} style={styles.initIcon}/>
        <View style={styles.textHolder}>
          <Text style={styles.topText}>Getting Started</Text>
          <Text style={styles.lowText}>Learn more about our app</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.holder}>
        <Image source={require('../../assets/images/help.png')} style={styles.initIcon}/>
        <View style={styles.textHolder}>
          <Text style={styles.topText}>FAQ</Text>
          <Text style={styles.lowText}>You can find major help flows</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.holder}>
        <Image source={require('../../assets/images/social-media.png')} style={styles.initIcon}/>
        <View style={styles.textHolder}>
          <Text style={styles.topText}>Community</Text>
          <Text style={styles.lowText}>Checkout our social platforms</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.holder}>
        <Image source={require('../../assets/images/support.png')} style={styles.initIcon}/>
        <View style={styles.textHolder}>
          <Text style={styles.topText}>Contact support</Text>
          <Text style={styles.lowText}>Chat with our customer service</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.holder}>
        <Image source={require('../../assets/images/light-bulb.png')} style={styles.initIcon}/>
        <View style={styles.textHolder}>
          <Text style={styles.topText}>Suggest something</Text>
          <Text style={styles.lowText}>Help us improve the experience</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.holder}>
        <Image source={require('../../assets/images/notification.png')} style={styles.initIcon}/>
        <View style={styles.textHolder}>
          <Text style={styles.topText}>Notifications</Text>
          <Text style={styles.lowText}>To make sure you're all caught up</Text>
        </View>
      </TouchableOpacity>
      <Text style={{fontSize:Theme.font.fontsize.button, textAlign:'center', marginTop:20}}>
        App version: 1.0.0
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Theme.color.white
  },
  holder:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'rgba(128,128,128,0.5)',
    padding:20,
  
  },
  initIcon:{
    height:30,
    width:30,
    marginRight:20
  },
  textHolder:{
    marginRight:60
  },
  topText:{
    fontSize:Theme.font.fontsize.button,
    color:Theme.color.gold
  },
  lowText:{
    fontSize:Theme.font.fontsize.body
  },
  arrImg:{
    height:20,
    width:20,
    marginLeft:20
  },
})