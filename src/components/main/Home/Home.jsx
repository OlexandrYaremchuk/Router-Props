import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './Home.module.css'
import TextBox from './TextBox/TextBox';

const Home = (props) => {
    let textBoxData = [
        { id: 1, head: 'Java Script', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia delectus soluta error labore, animi vero alias nobis impedit officiis nulla minima aliquid, est rerum eos dignissimos aspernatur ipsum ut?' },
        { id: 2, head: 'Angular', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia delectus soluta error labore, animi vero alias nobis impedit officiis nulla minima aliquid, est rerum eos dignissimos aspernatur ipsum ut?' },
        { id: 3, head: 'Java', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia delectus soluta error labore, animi vero alias nobis impedit officiis nulla minima aliquid, est rerum eos dignissimos aspernatur ipsum ut?' },
        { id: 4, head: 'Node.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia delectus soluta error labore, animi vero alias nobis impedit officiis nulla minima aliquid, est rerum eos dignissimos aspernatur ipsum ut?' },
        { id: 5, head: 'React', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia delectus soluta error labore, animi vero alias nobis impedit officiis nulla minima aliquid, est rerum eos dignissimos aspernatur ipsum ut?' },
        { id: 6, head: 'C++', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia delectus soluta error labore, animi vero alias nobis impedit officiis nulla minima aliquid, est rerum eos dignissimos aspernatur ipsum ut?' }
    ]

    let textsBox = textBoxData.map(textBoxes =>
        <TextBox head={textBoxes.head} text={textBoxes.text} />
    )


    return (

        <div className={style.home}>
            {textsBox}
        </div>


    )


}

export default Home;
