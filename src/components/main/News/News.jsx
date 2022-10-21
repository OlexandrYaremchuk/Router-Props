import React from 'react';

import style from './News.module.css'
import NewsBox from './NewsBox/NewsBox'

function News(props) {

    let NewsData = [
        { id: 1, img: 'https://static.euronews.com/articles/stories/07/10/49/80/444x249_cmsv2_619b391b-1827-51a8-bd7c-3b987b781dec-7104980.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' },
        { id: 1, img: 'https://timesofindia.indiatimes.com/thumb/msid-94607458,width-1200,height-900,resizemode-4/94607458.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' },
        { id: 1, img: 'https://cloudfront-us-east-1.images.arcpublishing.com/cmg/MUVJZBX4JVBJHJ33WUT7W3S4GE.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' },
        { id: 1, img: 'https://cdn.cnn.com/cnnnext/dam/assets/221008095610-smr-divorce-boudoir-photo-battle-00033520-large-169.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' },
        { id: 1, img: 'https://s.abcnews.com/images/WNT/221019_wn_full_hpMain_16x9_608.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' },
        { id: 1, img: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iG39ObflH.vg/v47/-1x-1.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' },
        { id: 1, img: 'https://static.euronews.com/articles/stories/07/10/49/80/444x249_cmsv2_619b391b-1827-51a8-bd7c-3b987b781dec-7104980.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' },
        { id: 1, img: 'https://static.euronews.com/articles/stories/07/10/49/80/444x249_cmsv2_619b391b-1827-51a8-bd7c-3b987b781dec-7104980.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam fugiat perspiciatis, porro dolorem, corporis autem ipsum nesciunt illum, perferendis quod facere maxime voluptatibus labore accusantium. Facere unde mollitia error?' }

    ]
    let NewsElements = NewsData.map(newsElement =>
        <NewsBox img={newsElement.img} text={newsElement.text} />

    )
    return (

        <div className={style.news}>
            {NewsElements}
        </div>


    )


}

export default News;
