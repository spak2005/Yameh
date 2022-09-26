import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import { Theme } from '../Theme/Theme'
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid"

const CartCard = (prop) => {

    const [num,setNum] = useState(1);
    const dec = () => {
      if(num > 0){
        setNum(num - 1)
      }
    }
    const inc = () => {
     setNum(num + 1)
    }
  
  return (
    <View style={styles.card}>
        <Image style={styles.img} source={{uri:prop.imgUrl}}/>
        <View style={styles.nameHolder}>
        <Text style={styles.name}>{prop.name}</Text>
        
            <Text style={styles.price}>₦{prop.price}</Text>
            <Text style={styles.price}>₦{prop.price*num}</Text>
        
        <View style={styles.numHolder}>
            <TouchableOpacity onPress={dec}>
                <MinusCircleIcon size={30} color={Theme.color.gold}/>
            </TouchableOpacity>
                
            <Text style={styles.num}>{num}</Text>

            <TouchableOpacity onPress={inc}>
                <PlusCircleIcon size={30} color={Theme.color.gold}/>
            </TouchableOpacity>
        </View>
        </View>
    
     </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingVertical:10,
      paddingHorizontal:20
    },
    goodsHolder:{
  
    },
    card:{
      flexDirection:'row',
      backgroundColor:'#fff',
      padding:5,
      borderRadius:10,
      marginTop:5
      
    },
    img:{
      height:160,
      width:130,
      marginRight:5
    },
    nameHolder:{
      justifyContent:'space-between'
    },
    name:{
      fontSize:12,
      maxWidth:180,
      fontWeight:'bold',
      color:'#646769'
    },
    numHolder:{
      flexDirection:'row',
      alignItems:'center',
      
    },
    signView:{
      height:20,
      width:20,
      backgroundColor:Theme.color.gold,
      borderRadius:5,
      marginRight:4
    },
    num:{
      marginRight:-1,
      fontSize:20
    },
    
    signs:{
      fontSize:15,
      textAlign:'center',
      color:'#fff'
    },
    priceHolder:{
  
    },
    price:{
      marginTop:0,
      fontSize:20,
      color:Theme.color.black,
      fontWeight:'bold'
    },
    detailHolder:{
      marginTop:10,
      marginBottom:20
    },
    detail:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    detailText:{
      fontSize:Theme.font.fontsize.body,
      marginTop:10
  
    },
    Total:{
      fontSize:Theme.font.fontsize.brandName,
      fontWeight:Theme.font.fontWeight.bold
    },
    button:{
      backgroundColor:Theme.color.gold,
      alignSelf:'center',
      padding:10,
      borderRadius:40,
      width:'100%'
    },
    buttonText:{
      textAlign:'center',
      fontWeight:Theme.font.fontWeight.bold,
      fontSize:Theme.font.fontsize.body
    }
  
    
  })

export default CartCard