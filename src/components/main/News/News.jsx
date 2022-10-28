import React from 'react';
import style from './News.module.css'
import NewsBox from './NewsBox/NewsBox'

function News(props) {

    let NewsElements = props.NewsData.map(newsElement =>
        <NewsBox img={newsElement.img} text={newsElement.text} />
    )
    return (
        <div className={style.news}>
            {NewsElements}
        </div>
    )
}
export default News;
