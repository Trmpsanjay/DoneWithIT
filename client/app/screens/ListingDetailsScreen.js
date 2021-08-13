import React from 'react';
import { View , Image , StyleSheet} from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText'
import ListItem from '../components/ListItem';

function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
      <Image style = {styles.image} source={listing.image}/>
      <View style = {styles.detailsContainer}>
        <AppText style = {styles.title} >{listing.title}</AppText>
        <AppText style = {styles.price} >${listing.price}</AppText>
        <View style = {styles.userContainer}>
            
        <ListItem image = {require('../assets/mosh.jpg')}
            title = 'Mosh HashDani'
            subTitle = '6 Listing'
        />
        </View>
      </View>
    </View>
       
    );
}

const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 300,
    },
    detailsContainer : {
        padding : 20,
    },
    title : {
        fontSize : 24,
        fontWeight : '500',
    },
    price : {
        fontSize :20,
        color : colors.secondary,
        fontWeight : 'bold',
        marginVertical : 10,
    },
    userContainer : {
        marginVertical :40
    }
})

export default ListingDetailsScreen;