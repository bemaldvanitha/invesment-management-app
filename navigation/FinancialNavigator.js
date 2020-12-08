import React from 'react';
import {Platform,Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

import StockPriceScreen from "../screens/StockPriceScreen";
import SelectedStockPriceScreen from "../screens/SelectedStockPriceScreen";
import CompanyDetailScreen from "../screens/CompanyDetailScreen";
import FinancialNewsScreen from "../screens/FinatialNewsScreen";
import SelectedFinancialNewsScreen from "../screens/SelectedFinalcialNewsScreen";
import ForexScreen from "../screens/ForexScreen";
import CurrencyRatingScreen from "../screens/CurencyRaingsScreen";
import BitcoinScreen from "../screens/BitcoinScreen";
import SelectedBitcoinDetail from "../screens/SelectedBitcoinDetailScreen";

const StockNav = createStackNavigator({
    stock: {
        screen: StockPriceScreen
    },
    selStock: {
        screen: SelectedStockPriceScreen
    },
    comDetail: {
        screen: CompanyDetailScreen,
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerTitleStyle: {
            fontFamily: 'nunito-bold',
            fontSize: 22
        },
        headerTitleAlign: 'center'
    }
});

const FinancialNewsNav = createStackNavigator({
   news: {
       screen: FinancialNewsScreen
   },
    selNews: {
       screen: SelectedFinancialNewsScreen
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerTitleStyle: {
            fontFamily: 'nunito-bold',
            fontSize: 22
        },
        headerTitleAlign: 'center'
    }
});

const ForexNav = createStackNavigator({
   forex: {
       screen: ForexScreen
   }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerTitleStyle: {
            fontFamily: 'nunito-bold',
            fontSize: 22
        },
        headerTitleAlign: 'center'
    }
});

const CurrencyNav = createStackNavigator({
    currency: {
        screen: CurrencyRatingScreen
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerTitleStyle: {
            fontFamily: 'nunito-bold',
            fontSize: 22
        },
        headerTitleAlign: 'center'
    }
});

const BitcoinNav = createStackNavigator({
    bitcoin: {
        screen: BitcoinScreen
    },
    bitcoinDetail: {
        screen: SelectedBitcoinDetail
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerTitleStyle: {
            fontFamily: 'nunito-bold',
            fontSize: 22
        },
        headerTitleAlign: 'center'
    }
});

const FinancialNavigator = createBottomTabNavigator({
    StockNavigator: {
        screen: StockNav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return(
                    <FontAwesome5 name="chart-line" size={28} color={tabInfo.tintColor} />
                )
            },
            tabBarLabel: 'Stock'
        }
    },
    NewsNavigator: {
        screen: FinancialNewsNav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return(
                    <FontAwesome5 name="newspaper" size={28} color={tabInfo.tintColor} />
                )
            },
            tabBarLabel: 'News'
        }
    },
    ForexNavigator: {
        screen: ForexNav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return(
                    <MaterialCommunityIcons name="currency-brl" size={28} color={tabInfo.tintColor} />
                )
            },
            tabBarLabel: 'Forex'
        }
    },
    CurrencyNavigator: {
        screen: CurrencyNav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return(
                    <FontAwesome5 name="dollar-sign" size={28} color={tabInfo.tintColor} />
                )
            },
            tabBarLabel: 'Currency'
        }
    },
    BitcoinNavigator: {
        screen: BitcoinNav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return(
                    <FontAwesome5 name="bitcoin" size={28} color={tabInfo.tintColor} />
                )
            },
            tabBarLabel: 'Bitcoin'
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Colors.secondary,
        labelStyle: {
            fontFamily: 'architects',
            fontSize: 12
        },
        style: {
            height: Dimensions.get('screen').height * 0.07
        }
    },
});

export default createAppContainer(FinancialNavigator);