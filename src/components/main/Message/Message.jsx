import React from 'react';

import style from './Message.module.css'
import MessageBox from './MessageBox/MessageBox';

function Message() {
    return (

        <div className={style.message}>
           <MessageBox/>
        </div>


    )


}

export default Message;
