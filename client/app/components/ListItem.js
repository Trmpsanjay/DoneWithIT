import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Swipeable from "react-native-gesture-handler/Swipeable";


import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle, ImageComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions = {renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
        {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style = {styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color = {colors.medium} name = "chevron-right" size = {25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor : colors.white,
    alignItems : 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer : {
    flex : 1,
    marginLeft : 10,
    justifyContent : 'center',
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
