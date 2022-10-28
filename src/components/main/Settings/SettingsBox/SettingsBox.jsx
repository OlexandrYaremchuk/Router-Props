import React from 'react';

import style from './SettingsBox.module.css'

function SettingsBox(props) {
    return (

        <div className={style.settingsBox}>
            <img src={props.imgUrl} alt="" />
            <p>{props.text}</p>
        </div>


    )


}

export default SettingsBox;
