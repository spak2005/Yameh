import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { Theme } from '../Theme/Theme'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({
  id,
  imgUrl,
  title,
  rating,
  long,
  lat,
  short_description
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{marginRight:5, backgroundColor:'#fff'}} onPress={
      () => navigation.navigate('Category')
    }>
      <Image source={{uri:imgUrl}} style={styles.img}/>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
       
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  img:{
   height:120,
   width:120
  },
  cardContainer:{
    paddingHorizontal:3,
    paddingBottom:4
  },
  title:{
    fontSize:12,
    paddingTop:2,
    maxWidth:200,
    fontWeight:'bold',
    color:'#646769',
    textAlign:'center'
    
  }
})

export default CategoryCard