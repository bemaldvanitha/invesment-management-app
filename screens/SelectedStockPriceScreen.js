import React,{useEffect} from 'react';
import {View,StyleSheet,Text,Dimensions,ScrollView,Button} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from "../constants/Colors";
import StockPriceByDateChart from "../components/StockPriceByDateChart";

const SelectedStockPriceScreen = (props) => {
    const comId = props.navigation.getParam('comId');
    const company = useSelector(store => store.stocks.comDetail).find(com => com.id === comId);
    const companyStock = useSelector(store => store.stocks.stockDate).filter(stock => stock.comId === comId);
    const isFirstHigh = companyStock[4].close > companyStock[5].close;

    useEffect(() => {
        props.navigation.setParams({name: company.name});
    },[comId]);

    return(
        <ScrollView>
            <View style={styles.screen}>
                <View>
                    <StockPriceByDateChart comId={comId}/>
                </View>

                <View style={styles.mainDetail}>
                    <Text style={{...styles.closeValue,color: isFirstHigh ? 'red' : 'green'}}>{companyStock[0].close}</Text>
                    <View style={styles.diff}>
                        <Text style={{...styles.closeDifferance,color: isFirstHigh ? 'red' : 'green'}}>
                            { (companyStock[5].close - companyStock[4].close).toFixed(2).toString() }
                        </Text>
                        <Text style={{...styles.closePercentage,color: isFirstHigh ? 'red' : 'green'}}>
                            { ((companyStock[5].close - companyStock[4].close)/companyStock[5].close).toFixed(3).toString() }
                        </Text>
                    </View>
                </View>

                <View style={styles.detailContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.item}>
                            <Text style={styles.label}>Open</Text>
                            <Text style={styles.value}>{companyStock[5].open}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>High</Text>
                            <Text style={styles.value}>{companyStock[5].high}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Volume</Text>
                            <Text style={styles.value}>{companyStock[5].volume}</Text>
                        </View>

                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.item}>
                            <Text style={styles.label}>Close</Text>
                            <Text style={styles.value}>{companyStock[5].close}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Low</Text>
                            <Text style={styles.value}>{companyStock[5].low}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Adj Close</Text>
                            <Text style={styles.value}>{companyStock[5].adjClose}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='Company Detail' color={Colors.secondary} onPress={() => {
                        props.navigation.navigate({routeName: 'comDetail',params: {comId: comId,comName: company.name}})
                    }}/>
                </View>
            </View>
        </ScrollView>
    )
};

SelectedStockPriceScreen.navigationOptions = navData => {
    const comName = navData.navigation.getParam('name');
    return{
        headerTitle: comName
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    mainDetail: {
        marginVertical: 20,
        alignItems: 'center'
    },
    diff: {
      flexDirection: 'row',
      paddingTop: 10
    },
    closeValue: {
        fontFamily: 'nunito-bold',
        fontSize: 30
    },
    closeDifferance: {
        paddingRight: 30,
        fontFamily: 'nunito',
        fontSize: 16
    },
    closePercentage: {
        fontFamily: 'nunito',
        fontSize: 16
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    rowContainer: {

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    label: {
        fontFamily: 'nunito-light',
        fontSize: 15
    },
    value: {
        fontFamily: 'nunito-italic',
        fontSize: 16
    },
    buttonContainer: {
        width: '60%',
        marginHorizontal: 60,
        marginTop: 20
    }
});

export default SelectedStockPriceScreen;