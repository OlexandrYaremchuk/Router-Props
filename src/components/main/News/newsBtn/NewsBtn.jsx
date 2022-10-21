import React from 'react';

import style from './NewsBtn.module.css'

const NewsBtn = (props) => {
    return (
        <div className={style.newsBox}>
            <button className={style.btn}>Read more...</button>
        </div>
    )
}

export default NewsBtn;
