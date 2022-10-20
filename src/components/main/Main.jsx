import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

import style from './Main.module.css'
import News from './News/News';

function Main() {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <Routes>
                    <ul>
                        <Route path='Home' element={<Home />} />
                        <Route path='News' element={<News />} />
                    </ul>
                </Routes>
            </div>
        </BrowserRouter >

    )


}

export default Main;
