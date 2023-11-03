import React from "react"
import className from "./albumItem.module.css"
import Counter from "../../UI/counter/counter"

const albumItem = (props) => {
    return (
        <div className={className.album} onClick={e=>e.stopPropagation()}>
            <div>
                <img
                    className={className.imgBox}
                    src={props.list.img}
                    alt=""></img>
            </div>
            <div className={className.DescBox}>
                <h2 className={className.title}>{props.list.album}</h2>
                <p className={className.desc}>{props.list.singer}</p>
                <div className={className.priceWrap}>
                    <span className={className.price}>{props.list.price}</span>
                    <Counter album={props.list} />
                </div>
            </div>
        </div>
    )
}

export default albumItem
