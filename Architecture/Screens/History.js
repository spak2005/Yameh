import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import React from "react";
import { Theme } from "../Theme/Theme";
import { HistoryData } from "../Data/Data";
import {XCircleIcon} from 'react-native-heroicons/solid'

function del (){
  return(
   Alert.alert(
     'Delete Confirmation',
     'Do want to erase this from your delivery history',
     [{text:'Yes',/*onPress:() => {navigation.navigate('Home')}*/},{text:'No'}]
 )
  ) 
}




export function History() {


  
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={HistoryData}
        renderItem={({ item }) => {
          return (
            <>
              <View style={styles.card}>
                <Image
                  source={{uri:item.imgUrl}}
                  style={styles.img}
                />
                <TouchableOpacity style={{position:'absolute'}} onPress={del}>
                  <XCircleIcon size={28} color={Theme.color.black} />
                </TouchableOpacity>
                <View style={styles.textHolder}>
                  <Text style={styles.name}>
                    {item.name}
                  </Text>
                  <Text style={styles.price}>${item.price}</Text>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View>
                      <Text style={{fontWeight:'bold'}}>Ordered</Text>
                      <Text style={styles.date}>{item.date}</Text>
                    </View>
                    <View>
                      <Text style={{fontWeight:'bold'}}>Delivered</Text>
                      <Text style={styles.date}>{item.date}</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.addTocart}>
                    <Text style={{fontWeight:'bold', textAlign:'center', }}>Add to cart</Text>
                  </TouchableOpacity>
                  
                </View>
              </View>
            </>
          );
        }}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  img: {
    height: 180,
    width: 150,
    marginRight: 10,
  },
  card: {
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
  },
  textHolder: {
    justifyContent: "space-around",
    flex:1
  },
  name: {
    maxWidth: 170,
    color:'gray',
    fontWeight:'bold'
  },
  price: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {},
  statusHolder: {
    backgroundColor: "black",
    borderRadius: 30,
  },
  status: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  addTocart:{
    backgroundColor:"white",
    padding:3,
    height:30,
    width:'100%',
    borderRadius:5,
    backgroundColor:Theme.color.gold,
    alignSelf:'center',
    justifyContent:'center'
  }
});
