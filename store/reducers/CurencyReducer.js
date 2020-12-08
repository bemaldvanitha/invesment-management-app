import {CurrencyRateList} from '../../data/dummy_data';
import {FETCH_CURRENCY_RATING} from '../actions/CurrencyAction';

const initState = {
    currency: [],
}

const CurrencyReducer = (state = initState,action) => {
    switch (action.type){
        case FETCH_CURRENCY_RATING:
            return {...state,currency: state.currency.concat(action.payload)}
        default: return state;
    }
}

export default CurrencyReducer;