import React from 'react';
import NewsBtn from '../newsBtn/NewsBtn';

import style from './NewsBox.module.css'

const News = (props) => {


    return (

        <div className={style.newsBox}>
            <img src={props.img} alt="" />
            <p>
                {props.text}
                <NewsBtn />
            </p>




        </div>


    )


}

export default News;
