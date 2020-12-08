import React,{useEffect} from 'react';
import {View,StyleSheet,Text,FlatList,ActivityIndicator} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import NewsItem from "../components/NewsItem";
import Colors from "../constants/Colors";
import {fetchFinancialNews} from '../store/actions/NewsAction';

const FinancialNewsScreen = (props) => {
    const currentNews = useSelector(store => store.news.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFinancialNews());
    },[dispatch]);

    if(currentNews.length === 0){
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.accent}/>
            </View>
        )
    }

    return(
        <FlatList data={currentNews} keyExtractor={(item,index) => item.id} renderItem={(data) => {
            return(
                <NewsItem title={data.item.title} id={data.item.id} source={data.item.source} image={data.item.urlToImage} date={data.item.publishedAt} onSelect={() => {
                    props.navigation.navigate({routeName: 'selNews',params: {id: data.item.id} })
                }}/>
            )
        }}/>
    )
};

FinancialNewsScreen.navigationOptions = {
    headerTitle: 'Top News'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FinancialNewsScreen;