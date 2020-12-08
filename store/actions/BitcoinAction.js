import axios from 'axios';

import BitcoinScore from '../../models/BitcoinScore';
import BitcoinRate from '../../models/BitcoinRate';

export const FETCH_CRYPTO_HEALTH_DATA = 'FETCH_CRYPTO_HEALTH_DATA';
export const FETCH_CRYPTO_RATING = 'FETCH_CRYPTO_RATING';

const bitCoinTypes = ['BTC','ETH','XRP','BCH','LTC'];
const moneyTypes = ['USD','EUR','JPY','CNY','AUD','NZD','GBP','RUB','KRW','INR'];

export const fetchCryptoHealthData = () => {
    return async (dispatch) => {
        const bitcoinHealthList = [];

        bitCoinTypes.map(async (bitType) => {
            const url = `https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=${bitType}&apikey=DZWMK54042WVK2GS`;
            try{
                const response = await axios.get(url);
                const resData = response.data;

                const bitCoinHealth = new BitcoinScore(Math.random().toString(),resData['Crypto Rating (FCAS)']['1. symbol'],
                    resData['Crypto Rating (FCAS)']['2. name'],resData['Crypto Rating (FCAS)']['3. fcas rating'],resData['Crypto Rating (FCAS)']['4. fcas score'],
                    resData['Crypto Rating (FCAS)']['5. developer score'],resData['Crypto Rating (FCAS)']['6. market maturity score']);

                bitcoinHealthList.push(bitCoinHealth);

            }catch (err){
                throw err;
            }
        });

        dispatch({
            type: FETCH_CRYPTO_HEALTH_DATA,
            payload: bitcoinHealthList,
        });

    }
}

export const fetchCryptoRating = (moneyCode,cryptoCode) => {
    return async (dispatch) => {
        const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${cryptoCode}&to_currency=${moneyCode}&apikey=C9UKU0JR9PS9SX6K`;

        try{
            const response = await axios.get(url);
            const resData = response.data;

            const rateData = new BitcoinRate(Math.random().toString(),resData['Realtime Currency Exchange Rate']['2. From_Currency Name'],
                resData['Realtime Currency Exchange Rate']['1. From_Currency Code'],resData['Realtime Currency Exchange Rate']['4. To_Currency Name'],
                resData['Realtime Currency Exchange Rate']['3. To_Currency Code'],resData['Realtime Currency Exchange Rate']['5. Exchange Rate'],
                resData['Realtime Currency Exchange Rate']['8. Bid Price'],resData['Realtime Currency Exchange Rate']['9. Ask Price']);

            dispatch({
                type: FETCH_CRYPTO_RATING,
                payload: rateData,
            });

        }catch (err){
            throw err;
        }
    }
}