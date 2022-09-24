import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'
import { Theme } from '../Theme/Theme';


export default function Signin ({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('Home')} style={{position:'absolute', marginLeft:7, marginTop:10}}>
        <ArrowLeftCircleIcon size={40} color={'black'}/>
      </TouchableOpacity>
      <Text style={styles.topText}>Login to your account</Text>
      
        <TextInput
        placeholder='E-Mail'
        style={[styles.input, {marginBottom:40}]}/>
      
      
        <TextInput
        placeholder='Password'
        secureTextEntry
        style={styles.input}/>

      <Text style={styles.forgot}>Forgot Password?</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <View style={styles.bottomTextHolder}>
        <Text style={styles.bottomText1}>New on Yameh?</Text>
        <TouchableOpacity onPress={()=> navigation.push('Signup')}>
          <Text style={styles.bottomText2}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
    paddingVertical:100

  },
  topText:{
    fontSize:20,
    marginBottom:30,
    textAlign:'center',
    fontWeight:Theme.font.fontWeight.bold
  }, 
  input:{
    borderWidth:1,
    borderColor:Theme.color.gold,
    width:'95%',
    alignSelf:'center',
    padding:10,
    borderRadius:20
  },
  forgot:{
    fontWeight:Theme.font.fontWeight.bold,
    color:'#447494',
    fontSize:15,
    marginTop:10,
    marginLeft:190
  },
  btn:{
    backgroundColor:Theme.color.gold,
    paddingVertical:17,
    marginTop:40,
    width:'90%',
    alignSelf:'center'
  },
  login:{
    textAlign:'center',
    fontSize:17,

  },
  bottomTextHolder:{
    flexDirection:'row',
    marginTop:20,
    alignSelf:'center'
  },
  bottomText1:{
    color:'gray',
  },
  bottomText2:{
    fontWeight:Theme.font.fontWeight.bold,
    color:'#447494',
    fontSize:15,
    marginLeft:20
  },
})

