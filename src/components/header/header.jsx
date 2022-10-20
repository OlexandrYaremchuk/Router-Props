import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import style from './header.module.css'

function Header() {
    return (

        <div className={style.Header}>
            <img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="" />

            <div className={style.nav}>
                <Link to='/Home'>Home</Link>
                <Link to='/News'>News</Link>

                <li>Settings</li>
                <li>Message</li>
            </div>
        </div >




    )


}

export default Header;
<Routes>
    <Route path="HomePage" element={<HomePage />} />
    <Route path="SearchPage" element={<SearchPage />} />
    <Route path="Library" element={<Library />} />
</Routes>