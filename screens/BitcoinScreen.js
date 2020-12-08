import React,{useState,useEffect} from 'react';
import {View, StyleSheet, Text, Platform, Picker, Dimensions, TextInput, Button,TouchableNativeFeedback,ActivityIndicator} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {useSelector,useDispatch} from 'react-redux';

import Colors from "../constants/Colors";
import {fetchCryptoHealthData,fetchCryptoRating} from '../store/actions/BitcoinAction';

const moneyTypes = ['USD','EUR','JPY','CNY','AUD','NZD','GBP','RUB','KRW','INR'];
const bitCoinTypes = ['BTC','ETH','XRP','BCH','LTC'];

const BitcoinScreen = (props) => {
    const dispatch = useDispatch();
    const [selectedMoney,setSelectedMoney] = useState(moneyTypes[3]);
    const [selectedBitcoin,setSelectedBitcoin] = useState(bitCoinTypes[0]);
    const [isBitcoinToMoney,setIsBitcoinToMoney] = useState(true);

    useEffect(() => {
        dispatch(fetchCryptoRating(selectedMoney,selectedBitcoin));
    },[dispatch,selectedMoney,selectedBitcoin]);

    const bitCoinRating = useSelector(store => store.crypto.bitcoinRates);

    const [amount,setAmount] = useState('');
    const [isValidAmount,setIsValidAmount] = useState(false);
    const [converted,setConverted] = useState('');

    // please remove this comment before make apk
    /* useEffect(() => {
    },[dispatch]);*/

    const convert = () => {
        const selectedRating = bitCoinRating.find(bitcoin => bitcoin.fromCode === selectedBitcoin && bitcoin.toCode === selectedMoney);

        let value;
        if(isBitcoinToMoney){
            value = +selectedRating.exchangeRate * +amount;
        }else{
            value = +amount / +selectedRating.exchangeRate;
        }

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

    if(bitCoinRating.length === 0){
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.primary}/>
                <Text>Rating data loading</Text>
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerHeader}>Money</Text>
                <Picker selectedValue={selectedMoney} onValueChange={(itemValue,itemIndex) => setSelectedMoney(itemValue)}>
                    {
                        moneyTypes.map(money => {
                            return(
                                <Picker.Item label={money} value={money} key={money}/>
                            )
                        })
                    }
                </Picker>
                <Text style={styles.pickerHeader}>Bitcoin</Text>
                <Picker selectedValue={selectedBitcoin} onValueChange={(itemValue,itemIndex) => setSelectedBitcoin(itemValue)}>
                    {
                        bitCoinTypes.map(coin => {
                            return(
                                <Picker.Item label={coin} value={coin} key={coin}/>
                            )
                        })
                    }
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputItem}>
                    <Text style={styles.label}>Enter {isBitcoinToMoney ? 'bitcoin' : 'money'} amount</Text>
                    <TextInput style={styles.input} value={amount} onChangeText={validateNumber} keyboardType='number-pad'/>
                    {!isValidAmount && <Text style={styles.error}>enter valid amount</Text>}
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='convert' color={Colors.secondary} onPress={convert}/>

                    <TouchableNativeFeedback onPress={() => setIsBitcoinToMoney(!isBitcoinToMoney)}>
                        <View style={styles.customButton}>
                            <Text style={styles.buttonText}>Convert  </Text>
                            <FontAwesome5 name="exchange-alt" size={24} color="white" />
                        </View>
                    </TouchableNativeFeedback>

                </View>
            </View>
            <View style={styles.outputContainer}>
                <Text style={styles.outputText}>
                    { converted.length === 0 ? 0 : parseFloat(converted).toString()+ '  ' }
                    {isBitcoinToMoney ? selectedMoney: selectedBitcoin}
                </Text>
            </View>
        </View>
    )
};

BitcoinScreen.navigationOptions = navData => {
    return{
        headerRight: () => {
            return(
                <View style={{marginTop: 10,marginRight: 20}}>
                    <FontAwesome5 name="heartbeat" size={24} color={Platform.OS === 'android' ? 'white' :Colors.primary} onPress={() => {
                        navData.navigation.navigate({routeName: 'bitcoinDetail'})
                    }}/>
                </View>
            )
        }
    }
}


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
        paddingVertical: Dimensions.get('screen').height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    outputContainer: {
        backgroundColor: '#F05454',
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
        fontFamily: 'raleway-italic',
        justifyContent: 'space-between',
        color: 'white'
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
    customButton: {
        flexDirection: 'row',
        backgroundColor: Colors.accent,
        padding: 10,
        elevation: 6
    },
    buttonText: {
        fontFamily: 'nunito-italic',
        color: 'white',
        fontSize: 15
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BitcoinScreen;