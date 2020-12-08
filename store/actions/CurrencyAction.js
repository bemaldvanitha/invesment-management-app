import axios from 'axios';

import CurrencyRate from '../../models/CurrencyRate';

export const FETCH_CURRENCY_RATING = 'FETCH_CURRENCY_RATING';

export const fetchCurrencyRating = (fromSymbol,toSymbol) => {
    return async (dispatch) => {
        const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromSymbol}&to_currency=${toSymbol}&apikey=DZWMK54042WVK2GS`;
        try{
            const response = await axios.get(url);
            const resData = response.data;

            const currencyRateItem = new CurrencyRate(Math.random().toString(),resData['Realtime Currency Exchange Rate']['2. From_Currency Name'],
                resData['Realtime Currency Exchange Rate']['1. From_Currency Code'],resData['Realtime Currency Exchange Rate']['4. To_Currency Name'],
                resData['Realtime Currency Exchange Rate']['3. To_Currency Code'],resData['Realtime Currency Exchange Rate']['5. Exchange Rate'],
                resData['Realtime Currency Exchange Rate']['6. Last Refreshed']);

            dispatch({
                type: FETCH_CURRENCY_RATING,
                payload: currencyRateItem,
            });

        }catch (err){
            throw err;
        }
    }
}