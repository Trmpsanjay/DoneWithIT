import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import ScreenComponent from "./app/components/ScreenComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthNavigator from "./app/naviigation/AuthNavigator";
import navigationTheme from "./app/naviigation/navigationTheme";
import AppNavigator from "./app/naviigation/AppNavigator";
import Listingscreen from "./app/screens/Listingscreen";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetsDetail" component={TweetsDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme = {navigationTheme}>
     <AppNavigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({});
