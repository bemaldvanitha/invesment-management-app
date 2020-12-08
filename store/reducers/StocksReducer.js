import {CompanyDetailList} from '../../data/dummy_data';
import {FETCH_STOCK_BY_DATE,FETCH_STOCK_BY_DATE_DIFF} from "../actions/StocksAction";

const initState = {
    stockDate : [],
    comDetail : CompanyDetailList
}

const StockReducer = (state = initState,action) => {
    switch (action.type){
        case FETCH_STOCK_BY_DATE:
            return {...state,stockDate: action.payload}
        case FETCH_STOCK_BY_DATE_DIFF:
            const finalStockData = [];
            action.payload.map(stock => {
                finalStockData.push(stock);
            });
            state.stockDate.map(stock => {
                finalStockData.push(stock);
            });
            return {...state,stockDate: finalStockData}

        default: return state;
    }
}

export default StockReducer;