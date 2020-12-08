import React,{useEffect,useState} from 'react';
import {View,StyleSheet,Text,FlatList,ActivityIndicator} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import BitcoinHealthItem from "../components/BitcoinHealthItem";
import Colors from "../constants/Colors";
import {fetchCryptoHealthData} from '../store/actions/BitcoinAction';

const SelectedBitcoinDetail = (props) => {
    const dispatch = useDispatch();
    const bitcoinHealth = useSelector(store => store.crypto.bitcoinScore);

    useEffect(() => {
        dispatch(fetchCryptoHealthData());
    },[dispatch]);

    if(bitcoinHealth.length === 0){
        return (
            <View style={styles.center}>
                <ActivityIndicator size='large' color={Colors.primary}/>
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList data={bitcoinHealth} keyExtractor={(item,index) => item.id} renderItem={(data) => {
                return(
                    <BitcoinHealthItem name={data.item.name} id={data.item.id} fcasRate={data.item.fcasRate} fcasScore={data.item.fcasScore}
                                       devScore={data.item.devScore} marketScore={data.item.marketScore} symbol={data.item.symbol}/>
                )
            }}/>
        </View>
    )
};

SelectedBitcoinDetail.navigationOptions = {
    headerTitle: 'Bitcoin Health'
}

const styles = StyleSheet.create({
    screen: {

    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SelectedBitcoinDetail;