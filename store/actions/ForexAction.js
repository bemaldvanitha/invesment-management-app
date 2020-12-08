import axios from 'axios';

import ForexRate from '../../models/ForexRate';

export const FETCH_FOREX_RATES = 'FETCH_FOREX_RATES';

export const fetchForexRates = (fromSymbol,toSymbol) => {
    return async (dispatch) => {
        const url = `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&interval=5min&apikey=DZWMK54042WVK2GS`;

        try{
            const response = await axios.get(url);
            const resData = response.data;
            const forexRateRawList = resData['Time Series FX (5min)'];
            const forexFinalData = [];
            let fetchItemCount = 0;

            for(const key in forexRateRawList){
                fetchItemCount++;

                if(fetchItemCount === 9){
                    break;
                }
                const forexItem = new ForexRate(Math.random().toString(),fromSymbol,toSymbol,forexRateRawList[key]['1. open'],
                    forexRateRawList[key]['2. high'],forexRateRawList[key]['3. low'],forexRateRawList[key]['4. close'],key);

                forexFinalData.push(forexItem);
            }

            dispatch({
                type: FETCH_FOREX_RATES,
                payload: forexFinalData
            })

        }catch (err){
            throw err;
        }
    }
}