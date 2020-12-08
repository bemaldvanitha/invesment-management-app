import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';

import Colors from "../constants/Colors";

const ForexChart = (props) => {
    const forexRates = useSelector(store => store.forex.forexes);
    const dates = [];
    const closePrices = [];
    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height * 0.3;
    let firstHigh;

    if(forexRates[0].close > forexRates[5].close){
        firstHigh = true;
    }else{
        firstHigh = false;
    }

    let from = forexRates[0].from;
    let to = forexRates[0].to;

    forexRates.map(forex => {
       dates.push(forex.date.toString().substring(11,));
       closePrices.push(forex.close);
    });

    const data = {
        labels: dates,
        datasets: [
            {
                data: closePrices,
            }
        ],
        legend: [`Forex ${from} - ${to}`]
    }

    const chartConfig = {
        color: firstHigh ? (opacity = 1) => `rgba(255, 0, 0, ${opacity})` : (opacity = 1) => `rgba(0, 204, 0, ${opacity})`,
        strokeWidth: 4,
        barPercentage: 0.5,
        backgroundGradientFrom: Colors.navColor,
        backgroundGradientTo: Colors.extraColor,
    };

    return(
        <View>
            <LineChart data={data} width={width} height={height} chartConfig={chartConfig}/>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ForexChart;