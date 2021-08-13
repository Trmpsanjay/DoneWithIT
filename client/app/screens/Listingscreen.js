import React from "react";
import { FlatList, Text, StyleSheet, ActivityIndicator } from "react-native";
import Card from "../components/Card";
import ScreenComponent from "../components/ScreenComponent";
import colors from "../config/colors";
import listingApi from "../api/listings";
import { useState } from "react";
import { useEffect } from "react";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import navigationTheme from "../naviigation/navigationTheme";
import ListingDetailsScreen from "./ListingDetailsScreen";

// const listing = [
//   {
//     id: 1,
//     title: "Red Jacket For Sale",
//     price: 100,
//     image: require("../assets/jacket.jpg")
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 200,
//     image: require("../assets/couch.jpg")
//   }
// ];

function Listingscreen({navigation}) {
  const [listing, setListing] = useState([]);
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false) ;
  useEffect(() => {
    loadListing();
  }, []);
  const loadListing = async () => {
    setLoading(true);
    const response = await listingApi.getListing();
    setLoading(false)

    if (!response.ok) return setError(true);

    setError(false);
    setListing(response.data);
  };

  return (
    <ScreenComponent style={styles.screen}>
      {error && (
        <>
          <AppText>Could not load the data</AppText>
          <AppButton title="Retry" onPress={loadListing} />
        </>
      )}
      <ActivityIndicator  animating={true}  color = 'red' />
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageUrl={item.images[0].url}
            onPress = {()=>navigation.navigate("ListingDetails",item)}
          />
        )}
      />
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default Listingscreen;
