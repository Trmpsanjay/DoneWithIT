import React from "react";
import { View, StyleSheet, TextInput, Platform, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyle from '../config/styles'

function AppTextInput({ icon,width ='100%', ...otherProps}) {
  return (
    <View style={[styles.container,{width}]}>
      {icon && 
        <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style = {styles.icon} />
      }
      <TextInput placeholderTextColor = {colors.medium} style = {defaultStyle.text}  {...otherProps}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: colors.light,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
