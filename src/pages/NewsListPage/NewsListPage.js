import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';

import NewsList from '../../components/NewsList/NewsList';

import getNews from '../../services/getNews';

const NewsListPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews().then((response) => setNewsList(response.data.articles));
    }, []);

    return (
        <section className='newsPage'>
            <PageTitle
                title={
                    <h2>
                        Завжди <br /> бути в курсі <span>подій</span>
                    </h2>
                }
            />

            {newsList.length > 0 && <NewsList item={newsList} />}
        </section>
    );
};

export default NewsListPage;
