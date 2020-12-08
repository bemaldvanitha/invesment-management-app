import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import FinancialNavigator from './navigation/FinancialNavigator';
import NewsReducer from './store/reducers/NewsReducer';
import StockReducer from "./store/reducers/StocksReducer";
import ForexReducer from './store/reducers/ForexReducer';
import CurrencyReducer from './store/reducers/CurencyReducer';
import BitcoinReducer from './store/reducers/BitcoinReducer';

const rootReducer = combineReducers({
  news: NewsReducer,
  stocks: StockReducer,
  forex: ForexReducer,
  currency: CurrencyReducer,
  crypto: BitcoinReducer,
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
    'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
    'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
    'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-black': require('./assets/fonts/Raleway-Black.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'raleway-italic': require('./assets/fonts/Raleway-Italic.ttf'),
    'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
    'architects': require('./assets/fonts/ArchitectsDaughter-Regular.ttf'),
  });
};

export default function App() {
  const [isLoading,setIsLoading] = useState(true);

  if(isLoading){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setIsLoading(false)}/>
  }

  return (
      <Provider store={store}>
        <FinancialNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'raleway'
  }
});
