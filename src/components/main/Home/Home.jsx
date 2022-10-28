import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './Home.module.css'
import TextBox from './TextBox/TextBox';

const Home = (props) => {


    let textsBox = props.textBoxData.map(textBoxes =>
        <TextBox head={textBoxes.head} text={textBoxes.text} />
    )


    return (

        <div className={style.home}>
            {textsBox}
        </div>


    )


}

export default Home;
