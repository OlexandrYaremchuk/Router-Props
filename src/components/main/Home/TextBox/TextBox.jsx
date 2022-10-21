import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './TextBox.module.css'

function TextBox(props) {
    return (

        <div className={style.home}>
            <div className={style.textBox}>
                <h1>{props.head}</h1>
                <p>{props.text}</p>

            </div>
        </div>


    )


}

export default TextBox;
