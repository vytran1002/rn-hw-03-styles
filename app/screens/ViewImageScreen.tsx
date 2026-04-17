
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} >
        <MaterialCommunityIcons name="close" size={30} color={colors.white} />
      </View>
      <View style={styles.deleteIcon} >
        <MaterialCommunityIcons name="trash-can" size={30} color={colors.white} />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
