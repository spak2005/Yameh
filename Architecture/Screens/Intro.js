import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Theme } from '../Theme/Theme'

export function Intro ({navigation}){
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backImg} source={require('../../assets/images/intro.png')} resizeMode="cover">
        <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.push('Home')}>
          <Text style={styles.btnText}>Shop now</Text>
        </TouchableOpacity>
      </ImageBackground>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1
  },
  backImg:{
    flex:1
  },
  logo:{
    height:300,
    width:300,
    alignSelf:'center',
    marginTop:-80
  },
  btn:{
    backgroundColor:Theme.color.gold,
    marginTop:420,
    borderRadius:20,
    padding:6,
    width:'90%',
    alignSelf:'center'
  },
  btnText:{
    fontSize:20,
    alignSelf:'center',
    fontWeight:'bold'
  }
})
