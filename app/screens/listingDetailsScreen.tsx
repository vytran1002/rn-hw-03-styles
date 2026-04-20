/* eslint-disable react/no-children-prop */
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/jacket.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText children={"red jacket for sale!"} style={styles.title} />
        <AppText children={"$50"} style={styles.subTitle} />
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title={"Mario Andolini"}
          image={require("../assets/images/mario.jpg")}
          subTitle={"2 posts this month"} onPress={function (): void {
            throw new Error("Function not implemented.");
          } } renderRightActions={function (): React.ReactNode {
            throw new Error("Function not implemented.");
          } }      />
      </View>
      
      {/* <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: "navy",
            borderRadius: "50%",
            marginRight: 10,
          }}
        />
        <View>
          <AppText children={"Mario Andolini"} style={{ fontWeight: "500" }} />
          <AppText
            children={"2 posts this month"}
            style={{ color: "#6e6969" }}
          />
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "navy",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer:{
    marginVertical: 40,
  }
});
