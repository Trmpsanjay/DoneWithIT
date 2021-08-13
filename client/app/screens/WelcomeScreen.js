import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import routes from "../naviigation/routes";

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      blurRadius={1.5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}> Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress = {()=>navigation.navigate(routes.LOGIN)} />
        <AppButton title="Register" color="secondary" onPress = {()=>navigation.navigate(routes.REGISTER)} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
