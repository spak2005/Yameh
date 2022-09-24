import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { React, useState } from 'react'
import { Theme } from '../Theme/Theme';
import { RadioButton, Checkbox } from 'react-native-paper';
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'

export default function Signup({navigation}) {
  const [checked, setChecked] = useState('male');
  const [checkedBox, setCheckedBox] = useState(false);
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.push('Signin')} style={{position:'absolute', marginLeft:7, paddingTop:10}}>
          <ArrowLeftCircleIcon size={40} color={'black'}/>
        </TouchableOpacity>
        <Text style={styles.topText}>Create an account</Text>
      <TextInput
      placeholder='First name'
      style={styles.input}
      keyboardType='default'
      />
      <TextInput
      placeholder='Last name'
      style={styles.input}
      keyboardType='default'
      />
      <TextInput
      placeholder='Phone number'
      style={styles.input}
      keyboardType='numeric'
      
      />
      <TextInput
      placeholder='E-Mail'
      style={styles.input}
      keyboardType='email-address'
      />
       <View style={styles.radioHolder}>
        <RadioButton
          value="first"
          status={ checked === 'male' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('male')}
          color={Theme.color.gold}
        />
        <Text style={{marginRight:30}}>Male</Text>
        <RadioButton
          value="second"
          status={ checked === 'female' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('female')}
          color={Theme.color.gold}
        />
        <Text>Female</Text>
       </View>
      <TextInput
      placeholder='Personal address'
      style={styles.input}
      />
      <TextInput
      placeholder='Password'
      style={[styles.input, {marginBottom:0}]}
      />
      <View style={{flexDirection:'row', alignItems:'center', marginTop:5}}>
        <Checkbox
        status={checkedBox ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheckedBox(!checkedBox);
        }}
        color={Theme.color.gold}
         />
        <Text>I agree with the</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.termsText}>Terms and conditions</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.btn}>
        <Text style={styles.login}>Create </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
    paddingTop:30,
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
    borderRadius:20,
    marginBottom:20
  },
  radioHolder:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
  },
  btn:{
    backgroundColor:Theme.color.gold,
    paddingVertical:17,
    marginTop:30,
    width:'90%',
    alignSelf:'center'
  },
  login:{
    textAlign:'center',
    fontSize:17,

  },
  termsText:{
    fontWeight:Theme.font.fontWeight.bold,
    color:'#447494',
    fontSize:15,
    marginLeft:35,
    marginTop:5

  }
})

