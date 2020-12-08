import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity,TouchableNativeFeedback} from 'react-native';

import Colors from "../constants/Colors";

const NewsItem = (props) => {
   return(
       <TouchableNativeFeedback onPress={props.onSelect}>
           <View style={styles.box}>
               <View style={styles.imageContainer}>
                   <Image style={styles.image} source={{uri: props.image}}/>
               </View>
               <View style={styles.detailContainer}>
                   <Text style={styles.title}>{props.title}</Text>
                   <Text style={styles.source}>{props.source}</Text>
                   <Text style={styles.date}>{props.date.toString().substring(0,10)}</Text>
               </View>
           </View>
       </TouchableNativeFeedback>
   )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.25
    },
    imageContainer: {

    },
    box: {
        marginHorizontal: Dimensions.get('screen').width * 0.04,
        marginVertical: Dimensions.get('screen').height * 0.02,
        backgroundColor: Colors.extraColor,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 2,
            height: 1
        },
        elevation: 6,
    },
    detailContainer: {
        paddingBottom: 20
    },
    title: {
        fontFamily: 'nunito-bold',
        fontSize: 24,
        textAlign: 'center',
    },
    source: {
        fontFamily: 'architects',
        paddingHorizontal: 40,
        fontSize: 16
    },
    date: {
        fontFamily: 'architects',
        paddingHorizontal: 40
    }
});

export default NewsItem;