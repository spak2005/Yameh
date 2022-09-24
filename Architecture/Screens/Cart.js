import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import { Theme } from '../Theme/Theme'
import CartCard from '../Components/CartCard';

export function Cart() {
  const [num,setNum] = useState(0);
  const dec = () => {
    if(num > 0){
      setNum(num - 1)
    }
  }
  const inc = () => {
   setNum(num + 1)
  }
  let price = 200000

  return (
    <View style={styles.container}>

      <ScrollView style={styles.goodsHolder}
      showsVerticalScrollIndicator={false}>
        <CartCard name='42 inches flatscreen television' price = {200000} imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/H/160872_1589392938.jpg'/>
        <CartCard name='42 inches flatscreen television' price = {200000} imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/H/160872_1589392938.jpg'/>
        <CartCard name='42 inches flatscreen television' price = {200000} imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/H/160872_1589392938.jpg'/>
        <CartCard name='42 inches flatscreen television' price = {200000} imgUrl='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/H/160872_1589392938.jpg'/>
      </ScrollView>

      <View style={styles.detailHolder}>
        <View style={styles.detail}>
          <Text style={styles.detailText}>Number of items:</Text>
          <Text style={styles.detailText}>5</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>Item total:</Text>
          <Text style={styles.detailText}>₦50</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailText}>Delivery charge:</Text>
          <Text style={styles.detailText}>₦10</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.Total}>Total:</Text>
          <Text style={styles.Total}>₦80</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed to payment</Text>
      </TouchableOpacity>
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
    maxWidth:220,
    fontWeight:'bold'
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
    marginRight:4,
    fontSize:15
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