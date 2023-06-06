import axios from 'axios';

const getNews = () => {
    const options = {
        method: 'GET',
        url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
        params: { q: 'covid', lang: 'en', media: 'True' },
        headers: {
            'X-RapidAPI-Key':
                '3f687895d2msheab1a7f0e00d4d4p1772e0jsn0ab58a82666e',
            'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com',
        },
    };

    return axios.request(options);
};

export default getNews;
