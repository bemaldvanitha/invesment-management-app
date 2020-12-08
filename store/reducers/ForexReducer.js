import {ForexRateList} from '../../data/dummy_data';
import {FETCH_FOREX_RATES} from '../actions/ForexAction';

const initState = {
    forexes: []
}

const ForexReducer = (state = initState,action) => {
    switch (action.type){
        case FETCH_FOREX_RATES:
            return {...state,forexes: action.payload}
        default: return state;
    }
}

export default ForexReducer;