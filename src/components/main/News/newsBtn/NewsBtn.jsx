import React from 'react';

import style from './NewsBtn.module.css'

const NewsBtn = (props) => {
    let newNewsElement = React.createRef();
    let addNews = () => {
        alert('HoHo')
    }
    return (
        <div className={style.newsBox}>
            <button onClick={addNews} className={style.btn}>Add comment</button>
        </div>
    )
}

export default NewsBtn;
