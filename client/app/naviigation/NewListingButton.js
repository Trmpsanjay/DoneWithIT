import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress = {onPress}>
      <View styles={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    bottom: 20,
    borderRadius: 40,
    height: 80,
    width: 80,
  },
});
export default NewListingButton;
