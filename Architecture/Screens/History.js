import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { Theme } from "../Theme/Theme";
import { HistoryData } from "../Data/Data";

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
                <View style={styles.textHolder}>
                  <Text style={styles.name}>
                    {item.name}
                  </Text>
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                  <View style={styles.statusHolder}>
                    <Text style={styles.status}>{item.status}</Text>
                  </View>
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: Theme.color.gold,
    marginBottom: 10,
    borderRadius: 10,
  },
  textHolder: {
    justifyContent: "space-around",
  },
  name: {
    maxWidth: 170,
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
});
