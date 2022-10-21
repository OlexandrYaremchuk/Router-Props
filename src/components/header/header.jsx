import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import style from './header.module.css'

function Header() {
    return (

        <div className={style.Header}>
            <img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="" />

            <div className={style.nav}>

                <Link to='/Home'><li>Home</li></Link>
                <Link to='/News'><li>News</li></Link>
                <Link to='/Settings'><li>Settings</li></Link>
                <Link to='/Message'><li>Message</li></Link>

            </div>
        </div >




    )


}

export default Header;