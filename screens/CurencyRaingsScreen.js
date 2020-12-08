import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Text,TextInput,Picker,Button,Dimensions,ActivityIndicator} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import Colors from "../constants/Colors";
import {fetchCurrencyRating} from '../store/actions/CurrencyAction';

const moneyTypes = ['USD','EUR','JPY','CNY','AUD','NZD','GBP','RUB','KRW','INR'];

const CurrencyRatingScreen = (props) => {
    const dispatch = useDispatch();
    const currencyRating = useSelector(store => store.currency.currency);
    const [fromCur,setFromCur] = useState(moneyTypes[0]);
    const [toCur,setToCur] = useState(moneyTypes[2]);

    const [amount,setAmount] = useState('');
    const [isValidAmount,setIsValidAmount] = useState(false);
    const [converted,setConverted] = useState('');

    const selectedRating = currencyRating.find(cur => cur.fromCode === fromCur && cur.toCode === toCur);

    useEffect(() => {
        dispatch(fetchCurrencyRating(fromCur,toCur));
    },[dispatch,fromCur,toCur]);

    const convert = () => {
        const value = +selectedRating.rate * +amount;
        setConverted(value.toString());
    }

    const validateNumber = (text) => {
        if(!isNaN(text)){
            if(+text >= 0){
                setIsValidAmount(true);
            }else{
                setIsValidAmount(false);
            }
        }else{
            setIsValidAmount(false);
        }
        setAmount(text)
    }

    if(currencyRating.length === 0){
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.accent}/>
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerHeader}>From</Text>
                <Picker selectedValue={fromCur} onValueChange={(itemValue,itemIndex) => setFromCur(itemValue)}>
                    {
                        moneyTypes.map(money => {
                            return(
                                <Picker.Item label={money} value={money} key={money}/>
                            )
                        })
                    }
                </Picker>
                <Text style={styles.pickerHeader}>To</Text>
                <Picker selectedValue={toCur} onValueChange={(itemValue,itemIndex) => setToCur(itemValue)}>
                    {
                        moneyTypes.map(money => {
                            return(
                                <Picker.Item label={money} value={money} key={money}/>
                            )
                        })
                    }
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputItem}>
                    <Text style={styles.label}>Enter value</Text>
                    <TextInput style={styles.input} value={amount} onChangeText={validateNumber} keyboardType='number-pad'/>
                    {!isValidAmount && <Text style={styles.error}>enter valid amount</Text>}
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='convert' color={Colors.buttonColor} onPress={convert}/>
                </View>
            </View>
            <View style={styles.outputContainer}>
                <Text style={styles.outputText}>{ parseInt(converted).toFixed(2).toString() }   {toCur}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        marginVertical: 10
    },
    pickerContainer: {
        width: '90%',
        marginLeft: 20
    },
    inputContainer: {

    },
    inputItem: {
        paddingVertical: 30
    },
    label: {
        textAlign: 'center',
        fontFamily: 'nunito-black',
        fontSize: 16
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: Dimensions.get('screen').width * 0.1,
        height: Dimensions.get('screen').height * 0.04,
    },
    buttonContainer: {
        marginHorizontal: Dimensions.get('screen').width * 0.2,
        paddingVertical: Dimensions.get('screen').height * 0.02
    },
    outputContainer: {
        backgroundColor: Colors.navColor,
        marginHorizontal: Dimensions.get('screen').width * 0.15,
        marginTop: 30,
        height: Dimensions.get('screen').height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 20,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 6
    },
    outputText: {
        fontFamily: 'raleway-italic'
    },
    pickerHeader: {
        textAlign: 'center',
        fontFamily: 'raleway',
        fontSize: 16
    },
    error: {
        color: 'red',
        textAlign: 'center'
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CurrencyRatingScreen;