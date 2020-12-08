import React from 'react';
import {View,Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {LineChart} from 'react-native-chart-kit'

import Colors from "../constants/Colors";

const StockPriceByDateChart = (props) => {
    const companyStock = useSelector(store => store.stocks.stockDate).filter(stock => stock.comId === props.comId);
    const dates = [];
    const closePrices = [];
    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height * 0.3;
    let firstHigh;

    if(companyStock[0].close > companyStock[5].close){
        firstHigh = true;
    }else{
        firstHigh = false;
    }

    companyStock.map(stock => {
        dates.push(stock.date.toString().substring(5,));
        closePrices.push(stock.close);
    });

    const data = {
        labels: dates,
        datasets: [
            {
                data: closePrices,
            }
        ],
        legend: ["Stock Price By Date"]
    }

    const chartConfig = {
        color: firstHigh ? (opacity = 1) => `rgba(255, 0, 0, ${opacity})` : (opacity = 1) => `rgba(0, 204, 0, ${opacity})`,
        strokeWidth: 4,
        barPercentage: 0.5,
        backgroundGradientFrom: Colors.extraColor,
        backgroundGradientTo: Colors.backGround,
    };

    return(
        <View>
            <LineChart data={data} width={width} height={height} chartConfig={chartConfig}/>
        </View>
    )
}

export default StockPriceByDateChart;