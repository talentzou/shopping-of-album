import React, { useContext } from "react"
import ReactDOM from "react-dom"
import classes from "./CartCalculate.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import AlbumItem from "../../album/Item/albumItem"
import List from "./List/List"
import CartContext from "../../../store/CartContext"
import Bar from "./Bar/Bar"
const calculate = document.getElementById("calculate-root")
const CartCalculate = (props) => {
    const ctx = useContext(CartContext)
    return ReactDOM.createPortal(
        <div className={classes.calculate}>
            <FontAwesomeIcon
                icon={faXmark}
                onClick={() => props.onHide()} className={classes.close}></FontAwesomeIcon>
            <div className={classes.albumList}>
                <h2 className={classes.title}>订单详情</h2>
                <div className={classes.list}>
                    {ctx.itemList.map((item) => (
                        <List
                            list={item}
                            key={item.id}
                        />
                    ))}
                </div>
                {/*合计价格 */}
                <div className={classes.total}>
                    <p className={classes.location}>合计：{ctx.totalPrice}</p>
                </div>
            </div>
            <Bar/>
        </div>,
        calculate
    )
}

export default CartCalculate
