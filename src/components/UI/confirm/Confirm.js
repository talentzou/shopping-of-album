import React from "react"
import classes from "./Confirm.module.css"
import BackDrop from "../backDrop/backDrop"
const Confirm = (props) => {
    return (
        
        <BackDrop className={classes.confirm} >
            <div className={classes.ConfirmWrap}>
                <p className={classes.title}>{props.warn}</p>
                <div className={classes.buttonWrap}>
                    <button className={classes.sure} onClick={(e)=>props.onConfirm(e)}>确定</button>
                    <button className={classes.cancel }onClick={(e)=>props.onCancel(e)}>取消</button>
                </div>
            </div>
        </BackDrop>
    )
}

export default Confirm
