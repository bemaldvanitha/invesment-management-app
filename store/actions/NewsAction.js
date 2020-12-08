import axios from 'axios';

import News from '../../models/News';

export const FETCH_FINANCIAL_NEWS = 'FETCH_FINANCIAL_NEWS';

export const fetchFinancialNews = () => {
    return async (dispatch) => {
        const url = 'https://newsapi.org/v2/everything?q=economy&apiKey=6240e718756a4ee98da21ea285162fd4';
        const backupImageUrl = 'https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152_1280.jpg';
        try{
            const response = await axios.get(url);
            const resData = response.data;
            const rawNewsList = resData['articles'];
            const finalNewsList = [];

            for(const key in rawNewsList){
                const newsItem = new News(
                    Math.random().toString(),
                    rawNewsList[key]['source']['name'],
                    rawNewsList[key]['author'] === null ? 'no author': rawNewsList[key]['author'],
                    rawNewsList[key]['title'],
                    rawNewsList[key]['description'],
                    rawNewsList[key]['url'] === null ? 'www.google.com': rawNewsList[key]['url'],
                    rawNewsList[key]['urlToImage'] === null ? backupImageUrl : rawNewsList[key]['urlToImage'],
                    rawNewsList[key]['publishedAt']);

                finalNewsList.push(newsItem);
            }

            dispatch({
               type: FETCH_FINANCIAL_NEWS,
               payload: finalNewsList,
            });

        }catch (err){
            throw err;
        }
    }
}