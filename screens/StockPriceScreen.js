import React,{useEffect} from 'react';
import {View,StyleSheet,Text,FlatList,ActivityIndicator} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import StockItem from "../components/StockItem";
import {fetchStockPriceByDateDiff} from '../store/actions/StocksAction';
import Colors from "../constants/Colors";

const StockPriceScreen = (props) => {
    const dispatch = useDispatch();
    const stockByDate = useSelector(store => store.stocks.stockDate);

    const stockLatestDate = [];
    const dayBeforeLatestDate = [];
    const renderItems = [];
    let number = 0;

    useEffect(() => {
        dispatch(fetchStockPriceByDateDiff('AAPL','c2',1));
        dispatch(fetchStockPriceByDateDiff('GOOGL','c3',1));
        dispatch(fetchStockPriceByDateDiff('TSLA','c4',1));
        dispatch(fetchStockPriceByDateDiff('FB','c6',2));
        dispatch(fetchStockPriceByDateDiff('AMZN','c7',2));
    },[dispatch]);

    setTimeout(() => {
        dispatch(fetchStockPriceByDateDiff('IBM','c1',1));
        dispatch(fetchStockPriceByDateDiff('MSFT','c5',1));
        dispatch(fetchStockPriceByDateDiff('NVDA','c8',2));
        dispatch(fetchStockPriceByDateDiff('NFLX','c9',2));
        dispatch(fetchStockPriceByDateDiff('ZM','c10',2));
    },60000)

    stockByDate.map(stock => {
        number++;
        if(number % 6 === 0){
            stockLatestDate.push(stock);
        }else if(number % 6 === 5){
            dayBeforeLatestDate.push(stock);
        }
    });

    stockLatestDate.map(stock => {
        const compareStock = dayBeforeLatestDate.find(comStock => comStock.comId === stock.comId);

        const renderItem = {};
        renderItem.id = stock.id;
        renderItem.close = stock.close;
        renderItem.comId = stock.comId;
        renderItem.diff = (stock.close - compareStock.close).toFixed(2);
        renderItem.oldClose = compareStock.close;

        if(stock.close > compareStock.close){
            renderItem.dirrection = 'up';
        }else{
            renderItem.dirrection = 'down';
        }

        renderItems.push(renderItem);
    });

    if(stockByDate.length === 0){
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.secondary}/>
            </View>
        )
    }

    return(
        <FlatList data={renderItems} keyExtractor={(item,index) => item.id} renderItem={(item) => {
            return(
                    <StockItem close={item.item.close} id={item.item.id} oldClose={item.item.oldClose} diff={item.item.diff} direction={item.item.dirrection}
                               comId={item.item.comId} onSelect={() => {
                                   props.navigation.navigate({routeName: 'selStock',params: {comId: item.item.comId}})
                    }}/>
                )
        }}/>
    )
};

const styles = StyleSheet.create({
    screen: {

    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StockPriceScreen;