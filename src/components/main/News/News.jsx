import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './News.module.css'

function News() {
    return (
        <BrowserRouter>
            <div className={style.news}>

                News
            </div>
        </BrowserRouter >

    )


}

export default News;
