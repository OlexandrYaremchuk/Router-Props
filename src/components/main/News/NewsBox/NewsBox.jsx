import React from 'react';
import style from './NewsBox.module.css'

const News = (props) => {

    let newNewsElement = React.createRef();
    let addNews = () => {
        let text = newNewsElement.current.value;
        alert(text)
    }
    return (
        <div className={style.newsBox}>
            <img src={props.img} alt="" />
            <div className={style.textBox}>
                <p>{props.text}</p>
                < div className={style.comment}>
                    <textarea ref={newNewsElement}>
                    </textarea>
                    <button onClick={addNews} className={style.textBoxBtn}>Add comment</button>
                </div>
            </div>
        </div >
    )
}
export default News;
