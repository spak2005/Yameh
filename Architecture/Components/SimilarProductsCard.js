import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { Theme } from '../Theme/Theme'
import { useNavigation } from '@react-navigation/native'

const SimilarProductsCard = ({
  id,
  imgUrl,
  title,
  rating,
  long,
  lat,
  short_description,
}) => {

      const navigation = useNavigation();

  return (
    <TouchableOpacity style={{marginRight:5, backgroundColor:'#fff'}} onPress={() => {
      navigation.navigate('ProductDisplay', {
        imgUrl:imgUrl,
        title:title,
        rating:rating,
        id:id
      })
    }}>
      <Image source={{uri:imgUrl}} style={styles.img}/>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection:'row', alignItems:'center',  }}>
          <View style={{flexDirection:'row', alignItems:'center',padding:10 }}>
              <StarIcon size={22} color={Theme.color.gold} />
              <Text style={{marginRight:3}}>
                {rating}
              </Text>
          </View>
          <Text style={{marginLeft:10, fontWeight:"bold"}}>
                ₦200000
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  img:{
   height:150,
   width:180
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
    color:'#646769'
    
    
  }
})

export default SimilarProductsCard