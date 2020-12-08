import {FETCH_FINANCIAL_NEWS} from '../actions/NewsAction';

const initState = {
  news: []
};

const NewsReducer = (state = initState,action) => {
    switch (action.type){
        case FETCH_FINANCIAL_NEWS:
            return {...state,news: action.payload}
        default: return state;
    }
};

export default NewsReducer;