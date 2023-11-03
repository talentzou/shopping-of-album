import React from "react"
import classes from "./List.module.css"
import Counter from "../../../UI/counter/counter"
const List = (props) => {
    return (
        <div className={classes.list}>
            <div className={classes.image}>
                <img
                    alt=""
                    src={props.list.img}
                />
            </div>
            <div className={classes.messageWrap}>
                <h3 className={classes.title}>{props.list.album}</h3>
                <div className={classes.message}>
                    <div>
                      <Counter album={props.list}></Counter>
                    </div>
                    <div className={classes.price}>{props.list.price*props.list.amount}</div>
                </div>
            </div>
        </div>
    )
}

export default List
