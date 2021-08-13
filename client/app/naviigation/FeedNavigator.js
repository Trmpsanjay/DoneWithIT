import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listingscreen from "../screens/Listingscreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = ()=> {
    return(
        <Stack.Navigator mode = "modal">
            <Stack.Screen name = "Listings" component = {Listingscreen} />
            <Stack.Screen name = "ListingDetails" component = {ListingDetailsScreen} options = {{headerShown : false}} />
        </Stack.Navigator>
    )
}

export default FeedNavigator;