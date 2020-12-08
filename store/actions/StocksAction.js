import axios from 'axios';

import StockPriceByDate from '../../models/StockPriceByDate';

export const FETCH_STOCK_BY_DATE = 'FETCH_STOCK_BY_DATE';
export const FETCH_STOCK_BY_DATE_DIFF = 'FETCH_STOCK_BY_DATE_DIFF';
export const FETCH_COMPANY_DETAIL = 'FETCH_COMPANY_DETAIL';

export const fetchStockPriceByDateDiff = (comName,comId,urlNum) => {
    return async (dispatch) => {
        const finalData = [];
        let url;
        const url1 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${comName}&apikey=43NUFHEJIVSMUMM4`;
        const url2 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${comName}&apikey=CZA9A2I40B7E2K3H`;

        if(urlNum === 1){
            url = url1;
        }else{
            url = url2;
        }

        try{
            const response = await axios.get(url);
            const resData = response.data;
            const rawStockData = resData['Time Series (Daily)'];
            let fetchItemCount = 0;

            for(const key in rawStockData){
                fetchItemCount++;

                if(fetchItemCount === 7){
                    break;
                }

                const stockItem = new StockPriceByDate(Math.random().toString(),comId,parseInt(rawStockData[key]['1. open']),
                    parseInt(rawStockData[key]['2. high']),parseInt(rawStockData[key]['3. low']),parseInt(rawStockData[key]['4. close']),
                    parseInt(rawStockData[key]['6. volume']), parseInt(rawStockData[key]['5. adjusted close']),key);

                   finalData.push(stockItem);
            }

            dispatch({
                type: FETCH_STOCK_BY_DATE_DIFF,
                payload: finalData
            });

        }catch (err){
            throw err;
        }
    }
}

export const fetchStockPriceByDateDiff2 = (comName,comId) => {
    return async (dispatch) => {
        const finalData = [];
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${comName}&apikey=CZA9A2I40B7E2K3H`
        try{
            const response = await axios.get(url);
            const resData = response.data;
            const rawStockData = resData['Time Series (Daily)'];
            let fetchItemCount = 0;

            for(const key in rawStockData){
                fetchItemCount++;

                if(fetchItemCount === 7){
                    break;
                }

                const stockItem = new StockPriceByDate(Math.random().toString(),comId,parseInt(rawStockData[key]['1. open']),
                    parseInt(rawStockData[key]['2. high']),parseInt(rawStockData[key]['3. low']),parseInt(rawStockData[key]['4. close']),
                    parseInt(rawStockData[key]['6. volume']), parseInt(rawStockData[key]['5. adjusted close']),key);

                finalData.push(stockItem);
            }

            dispatch({
                type: FETCH_STOCK_BY_DATE_DIFF,
                payload: finalData
            });

        }catch (err){
            throw err;
        }
    }
}