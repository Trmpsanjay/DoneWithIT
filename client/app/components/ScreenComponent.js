import React from "react";
import { SafeAreaView, StyleSheet , View } from "react-native";
import Constants from "expo-constants";
function ScreenComponent({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style = {style}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    // paddingLeft: 50,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    
  },
});
export default ScreenComponent;
