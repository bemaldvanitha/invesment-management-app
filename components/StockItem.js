import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from "../constants/Colors";

const StockItem = (props) => {
    const company = useSelector(store => store.stocks.comDetail).find(com => com.id === props.comId);

    return(
        <TouchableOpacity onPress={props.onSelect}>
            <View style={styles.box}>
                <View style={styles.detailContainer}>
                    <Text style={styles.symbol}>{ company.symbol }</Text>
                    <Text style={styles.name}>{ company.name.split(' ')[0] }</Text>
                </View>
                <View style={styles.stockContainer}>
                    <Text style={styles.close}>{ props.close.toString() }</Text>
                    <Text style={styles.unit}>USD</Text>
                </View>
                <View style={styles.differenceContainer}>
                    <Text style={ props.direction === 'up' ? styles.percentageGreen : styles.percentageRed }>
                        { Math.abs((props.diff / props.oldClose)).toFixed(2).toString() + ' %' }
                    </Text>
                    <Text style={ props.direction === 'up' ? styles.diffGreen : styles.diffRed }>{ props.diff }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        marginVertical: 5,
        backgroundColor: Colors.extraColor,
        marginHorizontal: 5
    },
    detailContainer: {
        justifyContent: 'flex-start',
        width: Dimensions.get('screen').width * 0.3
    },
    stockContainer: {
        justifyContent: 'flex-start',
    },
    differenceContainer: {
        width: Dimensions.get('screen').width * 0.2
    },
    symbol: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
    },
    name: {
        fontFamily: 'nunito',
        fontSize: 14
    },
    close: {
        fontFamily: 'raleway',
        fontSize: 16
    },
    unit: {
        fontFamily: 'raleway-light',
        fontSize: 14
    },
    percentageRed: {
        color: 'red',
        fontFamily: 'architects'
    },
    diffRed: {
        color: 'red',
        fontFamily: 'architects'
    },
    percentageGreen: {
        color: 'green',
        fontFamily: 'architects'
    },
    diffGreen: {
        color: 'green',
        fontFamily: 'architects'
    },
});

export default StockItem;