import React,{useEffect} from 'react';
import {View,StyleSheet,Text,ScrollView,Dimensions,ImageBackground} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from "../constants/Colors";

const SelectedFinancialNewsScreen = (props) => {
    const newsId = props.navigation.getParam('id');
    const selNews = useSelector(store => store.news.news).find(news => news.id === newsId);

    useEffect(() => {
        props.navigation.setParams({'title': selNews.title});
    },[selNews]);

    return(
        <ScrollView>
            <View style={styles.screen}>
                <ImageBackground source={{uri: selNews.urlToImage}} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{selNews.title}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.textContainer}>
                    <Text style={styles.description}>{selNews.description}</Text>
                    <Text style={styles.source}>{selNews.source}</Text>
                    <Text style={styles.author}>Written By :-   {selNews.author}</Text>
                    <Text style={styles.date}>Date :-  {selNews.publishedAt.toString().substring(0,10)}</Text>
                </View>
            </View>
        </ScrollView>
    )
};

SelectedFinancialNewsScreen.navigationOptions = navData => {
    const title = navData.navigation.getParam('title');
    return{
      headerTitle: title
    }
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.extraColor
    },
    titleContainer: {
        backgroundColor: 'black',
        opacity: 0.5,
        marginBottom: 20,
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.35,
        justifyContent: 'flex-end'
    },
    textContainer: {
        paddingHorizontal: Dimensions.get('screen').width * 0.04,
        paddingVertical: Dimensions.get('screen').height * 0.01,
    },
    title: {
        fontFamily: 'raleway-bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    description: {
        fontFamily: 'raleway-light',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 30
    },
    source: {
        textAlign: 'center',
        fontFamily: 'raleway-italic',
        fontSize: 15
    },
    author: {
        textAlign: 'center'
    },
    date: {
        textAlign: 'center'
    }
});

export default SelectedFinancialNewsScreen;