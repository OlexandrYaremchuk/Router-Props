import React from 'react';
import { BrowserRouter, Routes, Router, Route, NavLink, Link } from 'react-router-dom';
import Home from './Home/Home';

import style from './Main.module.css'
import Message from './Message/Message';
import News from './News/News';
import Settings from './Settings/Settings';

function Main() {
    return (

        <div className={style.main}>

            <div>
                <Routes>
                    <Route path='Home' element={<Home />} />
                    <Route path='News' element={<News />} />
                    <Route path='Settings' element={<Settings />} />
                    <Route path='Message' element={<Message />} />
                </Routes>
            </div>



        </div>


    )


}

export default Main;
