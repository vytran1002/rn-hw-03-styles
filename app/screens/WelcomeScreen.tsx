import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo-red.png")}
          style={styles.logo}
        />
        <Text>Sell What You Dont Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color={colors.primary}
          title="Login"
          onPress={() => console.log("Tapped!")}
        />
        <AppButton
          color={colors.secondary}
          title="Register"
          onPress={() => console.log("Tapped!")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
