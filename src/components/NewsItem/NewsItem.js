import React from 'react';
import './NewsItem.css';
import { NavLink } from 'react-router-dom';

import DataView from '../DataView';

const NewsItem = (props) => {
    return (
        <NavLink className='newsItem' to={`/news/${props.item._id}`}>
            <div className='title'>{props.item.title}</div>
            <div className='newsItem-footer'>
                <div className='source'> {props.item.clean_url} </div>
                <DataView date={props.item.published_date} />
            </div>
        </NavLink>
    );
};

export default NewsItem;
