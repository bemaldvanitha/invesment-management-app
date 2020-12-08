import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Text,Picker,Button,Dimensions,ScrollView,ActivityIndicator} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import ForexChart from "../components/ForexChart";
import Colors from "../constants/Colors";
import {fetchForexRates} from '../store/actions/ForexAction';

const moneyTypes = ['USD','EUR','JPY','CNY','AUD','NZD','GBP','RUB','KRW','INR'];

const ForexScreen = (props) => {
    const dispatch = useDispatch();
    const forexRates = useSelector(store => store.forex.forexes);

    const [fromCurrency,setFromCurrency] = useState(moneyTypes[1]);
    const [toCurrency,setToCurrency] = useState(moneyTypes[0]);

    useEffect(() => {
        dispatch(fetchForexRates(fromCurrency,toCurrency));
    },[dispatch,fromCurrency,toCurrency]);

    if(forexRates.length === 0 || forexRates[0].from !== fromCurrency || forexRates[0].to !== toCurrency){
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.secondary}/>
            </View>
        )
    }

    return(
        <ScrollView>
            <View style={styles.screen}>
                <ForexChart/>
                <View style={styles.pickerContainer}>
                    <View>
                        <Picker selectedValue={fromCurrency} onValueChange={(itemValue,itemIndex) => setFromCurrency(itemValue)}>
                            {
                                moneyTypes.map(money => {
                                    return(
                                        <Picker.Item label={money} value={money} key={money}/>
                                    )
                                })
                            }
                        </Picker>
                        <Picker selectedValue={toCurrency} onValueChange={(itemValue,itemIndex) => setToCurrency(itemValue)}>
                            {
                                moneyTypes.map(money => {
                                    return(
                                        <Picker.Item label={money} value={money} key={money}/>
                                    )
                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title='Search' color={Colors.accent} onPress={() => {
                            dispatch(fetchForexRates(fromCurrency,toCurrency));
                        }}/>
                    </View>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.detailText}>Open   :-   {forexRates[7].open}</Text>
                        <Text style={styles.detailText}>High   :-   {forexRates[7].high}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.detailText}>Close  :-   {forexRates[7].close}</Text>
                        <Text style={styles.detailText}>Low    :-   {forexRates[7].low}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    pickerContainer: {
        paddingHorizontal: Dimensions.get('screen').width * 0.1,
        paddingVertical: 20
    },
    buttonContainer: {
        marginVertical: Dimensions.get('screen').height * 0.02,
        marginHorizontal: Dimensions.get('screen').width * 0.1
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    rowContainer: {

    },
    detailText: {
        paddingVertical: 10,
        fontFamily: 'raleway-italic',
        fontSize: 16
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ForexScreen;