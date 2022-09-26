import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { React, useState } from 'react'
import { ChevronRightIcon, MinusCircleIcon, PlusCircleIcon, ShareIcon, StarIcon } from 'react-native-heroicons/solid';
import { Theme } from '../Theme/Theme';
import SimilarProducts from '../Components/SimilarProducts';

const ProductDisplay = ({navigation, route}) => {

    const [num,setNum] = useState(1);
    const dec = () => {
      if(num > 0){
        setNum(num - 1)
      }
    }
    const inc = () => {
     setNum(num + 1)
    }

    const {imgUrl, title, rating, id, price} = route.params;
  return (
    <View style={styles.container}>
        <ScrollView>
        <View>
            <Image source={{uri:imgUrl}} style={styles.img}/>
        </View>
        <View style={{padding:20, backgroundColor:'#fff', marginTop:5}}>
        {/* The name of the product will go here */}
          <Text style={styles.title}>{title}</Text>

          {/* The brand name will go here */}
          <Text style={styles.brandName}>Brand: Here will contain the brand name as a link</Text>
            <View style={styles.numHolder}>
                <TouchableOpacity onPress={dec}>
                    <MinusCircleIcon size={35} color={Theme.color.gold}/>
                </TouchableOpacity>
                    
                <Text style={styles.num}>{num}</Text>

                <TouchableOpacity onPress={inc}>
                    <PlusCircleIcon size={35} color={Theme.color.gold}/>
                </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight:'500',marginLeft:20 }}>₦{price * num}</Text>
            </View>
            <TouchableOpacity style={styles.addToCart}>
              <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>

          <View style={{flexDirection:'row', padding:10, marginTop:10}}>
          {/* The rating will go here */}
            <StarIcon size={17} color={Theme.color.gold}></StarIcon>
            <StarIcon size={17} color={Theme.color.gold}></StarIcon>
            <StarIcon size={17} color={Theme.color.gold}></StarIcon>
            <StarIcon size={17} color={Theme.color.gold}></StarIcon>
            <StarIcon size={17} color={Theme.color.gold}></StarIcon>
            <Text style={{marginLeft:5}}>(102) ratings  </Text>
            <ShareIcon color={Theme.color.gold} size={20} style={{marginLeft:100}}/>
          </View>   
                   
        </View>
        <Text style={{marginTop:10, marginLeft:10, fontSize:16, fontWeight:'bold', color:'gray' }}>Product details</Text>

        <TouchableOpacity style={styles.description} onPress={()=> navigation.push('Description')}>
          <Text style={{fontSize:17, fontWeight:'500'}}>Description</Text>
          <ChevronRightIcon size={25} color='black'/>
        </TouchableOpacity>

        <Text style={{marginTop:10, marginLeft:10, fontSize:16, fontWeight:'bold', color:'gray' }}>Similar products</Text>

        <View>
            <SimilarProducts/>
        </View>
        <View style={{height:20}}>

        </View>
        
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    name:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center',

    },
    img:{
        height:300,
        width:'80%',
        alignSelf:'center',
        marginTop:5

    },
    numHolder:{
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'center',
      paddingTop:20
    },
    num:{
        fontSize:25
    },
    title:{
      fontSize:20,   
    },
  brandName:{
  paddingTop:10
  },
  addToCart:{
    backgroundColor:Theme.color.gold,
    padding:10,
    width:200,
    borderRadius:10,
    alignSelf:'center',
    marginTop:20
  },
  addToCartText:{
    fontSize:20,
    textAlign:'center'
  },
  description:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    backgroundColor:'#fff',
    padding:10,
    marginTop:10,
    width:'97%',
    alignSelf:'center'
   
  }
})

export default ProductDisplay