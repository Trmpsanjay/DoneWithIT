import React from "react";
import { View, StyleSheet ,FlatList } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import ListItem from "../components/ListItem";
import ScreenComponent from "../components/ScreenComponent";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
const menuItems = [
    {
      title: "My Listing",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      targetScreen : "Messages"
    },
  ];
function AccountScreen({navigation}) {
  return (
    <ScreenComponent style = {styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Sanjay Kumar"
          subTitle="trmpsanjay@gmail.com"
          image={require("../assets/sanjay.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent = {ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress = {()=>navigation.navigate(item.targetScreen)}

            />
          )}
        />
      </View>
      <ListItem  title = "Log Out" ImageComponent = {<Icon name='logout' backgroundColor ='#ffe66d'/>}/>
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen : {
      backgroundColor : colors.light,
  }
});

export default AccountScreen;
