import React from 'react';

import style from './Settings.module.css'
import SettingsBox from './SettingsBox/SettingsBox';

function Settings() {

    let settingsData = [
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
        {id:1,  imgUrl:'https://play-lh.googleusercontent.com/QvTfA5WH0B4X04u_sxSBdb-PlO7Wj6yjeyJVzwoyUsefJPTXDE75QBKKJr1fyI5CHQq9', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod, a repellat fugiat in, fuga praesentium inventore reiciendis veniam laboriosam tempore iste facere nobis recusandae unde quia. Consequuntur, nesciunt culpa.'},
    
    ]

let settings = settingsData.map(settingsElement => 
    <SettingsBox imgUrl={settingsElement.imgUrl} text={settingsElement.text}/>
    )


    return (

        <div className={style.settings}>
             {settings}
        </div>


    )


}

export default Settings;
