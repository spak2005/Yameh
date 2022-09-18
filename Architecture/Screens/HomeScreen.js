import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { React } from "react";
import { Theme } from "../Theme/Theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "./Profile";
import { History } from "./History";
import { Cart } from "./Cart";
import { Help } from "./Help";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topHolder}>
        <Text style={styles.toptext}>What are you looking for ?</Text>
        <TouchableOpacity style={styles.arrowHolder} onPress={()=> navigation.push('Signin')}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        {/* Input goes here */}
        <Image
          source={require("../../assets/images/search.png")}
          style={styles.searchImg}
        />
        <TextInput placeholder="Search" style={{ flex: 1 }} />
      </View>
      <View style={styles.advertisment}>{/* Advertisment will go here */}</View>
      <View>
        <Text style={{ marginTop: 20, fontWeight: "400" }}>Categories</Text>
        <View style={styles.categoryHolder}>
          <ScrollView horizontal>
            <TouchableOpacity
              style={styles.rows}
              onPress={() => navigation.push("Intro")}
            >
              <Image
                source={require("../../assets/images/phone.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Phones & Tablets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/laptop.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Laptop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/refrigerator.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Refrigerators</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/television.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Televisions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/printer.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Printers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/iron.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Pressing Irons</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/blender.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Blenders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/blender.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Air conditioners</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/blender.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Washing Machines</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/blender.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Electric fans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rows}>
              <Image
                source={require("../../assets/images/blender.png")}
                style={styles.categoryImg}
              />
              <Text style={styles.categoryText}>Inverters</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
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
  arrowHolder:{
    marginLeft:110,
    backgroundColor:Theme.color.black,
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
    marginTop: 10,
    backgroundColor: "rgba(128,128,128,0.2)",
  },
  searchImg: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  advertisment: {
    height: 150,
    width: "100%",
    borderwidth: 1,
    backgroundColor: Theme.color.gold,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
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
