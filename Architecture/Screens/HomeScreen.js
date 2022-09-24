import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageStore,
} from "react-native";
import { React, useState } from "react";
import { Theme } from "../Theme/Theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "./Profile";
import { History } from "./History";
import { Cart } from "./Cart";
import { Help } from "./Help";
import {UserIcon, AdjustmentsHorizontalIcon} from "react-native-heroicons/solid"
import Category from "../Components/Category";
import Trending from "../Components/Trending";
import { swiperImages } from "../Data/Data";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export function HomeScreen({ navigation }) {

  const [imgActive, setImgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.topHolder}>
        <Text style={styles.toptext}>What are you looking for ?</Text>
        <TouchableOpacity style={styles.user} onPress={()=> navigation.push('Signin')}>
          <UserIcon color={Theme.color.gold} size={25}/>
        </TouchableOpacity>
      </View>
     
        <View style={styles.input}>
          {/* Input goes here */}
          <Image
            source={require("../../assets/images/search.png")}
            style={styles.searchImg}
          />
          <TextInput placeholder="Search" style={{ flex: 1 }} />
          <TouchableOpacity>
           <AdjustmentsHorizontalIcon size={20} color={Theme.color.gold}/>
          </TouchableOpacity>
          
        </View>
      
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.categoryHolder}
        >
      <View style={styles.advertisment}>
        {/* Advertisment will go here */}
        <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.advertisment}
        >
          {
            swiperImages.map((e, index) => 
              <Image
              key={e}
              resizeMode='stretch'
              style={styles.advertisment}
              source={{uri:e}}
              />

            )
          }
        </ScrollView>
        <View style={styles.wrapDot}>
          {
            swiperImages.map((e, index) =>
              <Text
              key={e}
              style={[imgActive == index ? styles.dotActive : styles.dot, {fontSize:23}]}
              >
                •
              </Text>
            )
          }
        </View>
      </View>
     
        
          <Trending name='Trending'/>
          <Category name='Consumer electronics'/>
          <Category name='Appliances'/>
          <Category name='Mobile electronics'/>
          <Category name='Power'/>
        </ScrollView>
       
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "History") {
            iconName = focused
              ? "md-file-tray-stacked"
              : "md-file-tray-stacked";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "person-circle-outline"
              : "person-circle-outline";
          } else if (route.name === "Help") {
            iconName = focused ? "help-circle" : "help-circle";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Theme.color.gold,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="History" component={History} options={{ headerStyle: { backgroundColor: Theme.color.gold }, }}/>
      <Tab.Screen name="Cart" component={Cart} options={{ headerStyle: { backgroundColor: Theme.color.gold }, }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerStyle: { backgroundColor: Theme.color.gold }, }}/>
      <Tab.Screen name="Help" component={Help} options={{ headerStyle: { backgroundColor: Theme.color.gold }, }}/>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    },
  toptext: {
    textAlign: "center",
  },
  topHolder:{
    flexDirection:'row',
    alignItems:'center'
  },
  user:{
    marginLeft:130,
    padding:5,
    borderRadius:5

  },
  login:{
    fontSize:Theme.font.fontsize.body,
    fontWeight:Theme.font.fontWeight.bold,
    color:Theme.color.white
  },
  input: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgba(128,128,128,0.2)",
  },
  searchImg: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  advertisment: {
    height: HEIGHT*0.25,
    width: WIDTH,
    marginLeft:-10,
    alignSelf:'center'
    
   
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'black'
  },
  dot:{
    margin:3,
    color:'white'
  },
  rows: {
    height: 120,
    width: 120,
    backgroundColor: Theme.color.gold,
    borderRadius: 10,
    paddingHorizontal: 4,
    marginRight: 5,
  },
  categoryImg: {
    height: 70,
    width: 70,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  categoryText: {
    textAlign: "center",
  },
  categoryHolder: {
    marginTop: 10,
  },
  
});
