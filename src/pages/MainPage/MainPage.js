import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';

import NewsList from '../../components/NewsList/NewsList';

import getNews from '../../services/getNews';

const styleSub = {
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '24.36px',
    color: '#004FEC',
};

const MainPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews().then((response) => setNewsList(response.data.articles));
    }, []);

    return (
        <section className='mainPage'>
            <PageTitle
                title={
                    <h2>
                        Завжди <br /> свіжі <span>новини</span>
                    </h2>
                }
            />

            {newsList.length > 0 && <NewsList item={newsList.slice(0, 6)} />}

            <div className='subscribe' style={styleSub}>
                Бути у курсі подій
            </div>
        </section>
    );
};

export default MainPage;
