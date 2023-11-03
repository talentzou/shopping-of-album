import React, { useContext, useState } from "react"
import classes from "./Cart.module.css"
import IconImg from "../../assets/imgs/cart.png"
import CartContext from "../../store/CartContext"
import CartDetail from "./CartDetail/cartDetail"
import CartCalculate from "./CartCalculate/CartCalculate"
const Cart = () => {
    const ctx = useContext(CartContext)
    const [showCart,setShowCartState]=useState(false)
    //购物车是否展示
    const showDetailCart=()=>{  
        console.log('11119999');
        if(ctx.totalAmount===0){ return setShowCartState(false)}
        setShowCartState(pre=>!pre)
        console.log('666666');
    }
    /* 结账页面的显示*/
    const [showCalculate,setShowCalculateState]=useState(false)
    const showCalculateHandler=()=>{
       if(ctx.totalAmount===0)return
       setShowCalculateState(true)
    }
    //隐藏结算页面
    const closeHandler=()=>{
        setShowCalculateState(false)
    }
    return (
        <div className={classes.cart} onClick={showDetailCart}>
            {/* 商品详情 */}
            {showCart&&<CartDetail></CartDetail>}
            {/* 结算页面 */}
            {showCalculate &&<CartCalculate onHide={closeHandler}></CartCalculate> }
            <div className={classes.iconWrap}>
                <img
                    src={IconImg}
                    alt=""
                    className={classes.iconImg}></img>
                {ctx.totalAmount === 0 ? null : <span className={classes.count}>{ctx.totalAmount}</span>}
            </div>
            {ctx.totalAmount === 0 ? <p className={classes.unSelected}>未选购商品</p> : <p className={classes.price}>{ctx.totalPrice}</p>}

            <button className={`${classes.payment} ${ctx.totalAmount === 0 ?classes.disabled:''}`} onClick={showCalculateHandler}>去支付</button>
        </div>
    )
}

export default Cart
