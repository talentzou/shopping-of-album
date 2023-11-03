import React, { useContext } from "react"
import BackDrop from "../../UI/backDrop/backDrop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import classes from "./careDetail.module.css"
import CartContext from "../../../store/CartContext"
import AlbumItem from "../../album/Item/albumItem"
import Confirm from "../../UI/confirm/Confirm"
import { useState } from "react"
const CartDetail = () => {
    const ctx = useContext(CartContext)
    const [showConfirm, setShowConfirm] = useState(false)
    //取消按钮
    const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }
    //确定按钮
    const confirmHandler = () => {
        ctx.clearCart()
        setShowConfirm(false)
    }
    //显示确认框
    const showHandler = () => {
        setShowConfirm(true)
    }

    return (
        <BackDrop>
            {showConfirm && (
                <Confirm
                    onCancel={cancelHandler}
                    onConfirm={confirmHandler}
                    warn={'你确定删除吗？'}
                />
            )}
            <div className={classes.Detail}>
                <div
                    className={classes.buttonWrap}
                    onClick={(e) => e.stopPropagation()}>
                    <h2 className={classes.title}>购买专辑详情</h2>
                    <button
                        className={classes.clear}
                        onClick={showHandler}>
                        {/* onClick={ctx.clearCart} */}
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        <span>清空购物车</span>
                    </button>
                </div>
                <div className={classes.albumList}>
                    {ctx.itemList.map((item) => {
                        return (
                            <AlbumItem
                                list={item}
                                key={item.id}
                            />
                        )
                    })}
                </div>
            </div>
        </BackDrop>
    )
}

export default CartDetail
