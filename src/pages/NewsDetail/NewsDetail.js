import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './NewsDetail.css'
import DataView from '../../components/DataView'
import getNews from "../../services/getNews";
 
const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        getNews().then(response => setNews(response.data.articles.find(item => item._id === id)))
    }, [id])

    return (
        <section className="newsDetailPage">
            {news ? (
                <div className="newsDetailWrapper">
                    <div className="news-info">
                        <h2 className="title"> {news.title} </h2>
                        <p className="source"> {news.clean_url} </p>
                        <DataView date = { news.published_date }/>
                    </div>
                    <div className="news-detailInfo">
                        <img src={ news.media } alt={ news.media }/>
                        <p className="news-text"> {news.summary} </p>
                    </div>
                </div>
            ) : <></>}
        </section>
    )
}

export default NewsDetail;