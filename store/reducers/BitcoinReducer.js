import {BitCoinRateList} from '../../data/dummy_data';
import {FETCH_CRYPTO_HEALTH_DATA,FETCH_CRYPTO_RATING} from '../actions/BitcoinAction';

const initState = {
    bitcoinScore: [],
    bitcoinRates: [],
}

const BitcoinReducer = (state = initState,action) => {
    switch (action.type){
        case FETCH_CRYPTO_HEALTH_DATA:
            return {...state,bitcoinScore: action.payload}
        case FETCH_CRYPTO_RATING:
            return {...state,bitcoinRates: state.bitcoinRates.concat(action.payload)}
        default: return state;
    }
}

export default BitcoinReducer;