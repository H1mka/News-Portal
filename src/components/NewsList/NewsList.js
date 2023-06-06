import React from 'react';
import './NewsList.css'
import NewsItem from '../NewsItem/NewsItem';

const NewsList = props => {
    return (
        <div className='NewsList'>
            {props.item.map(news => {
                return <NewsItem 
                    key = { news._id }
                    item = {news}
                />
            })}
        </div>
    )
}

export default NewsList;