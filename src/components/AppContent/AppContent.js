import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './AppContent.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import NewsListPage from '../../pages/NewsListPage/NewsListPage';
import Contacts from '../../pages/Contacts/Contacts';
import NewsDetail from '../../pages/NewsDetail/NewsDetail';

const AppContent = () => {
    return (
        <div className='mainWrapper'>
            <Header />

            <main>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path={'/news'} element={<NewsListPage />} />
                    <Route path={'/news/:id'} element={<NewsDetail />} />
                    <Route path={'/contacts'} element={<Contacts />} />
                    <Route path={'*'} element={<Navigate to='/' replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default AppContent;
