import React from 'react'
import CartContext from '../../../../store/CartContext'
import { useContext } from 'react'
import classes from './Bar.module.css'
const Bar = () => {
    const ctx=useContext(CartContext)
  return (
    <div className={classes.bar}>
        <div className={classes.price}>{ctx.totalPrice}</div>
       <button className={classes.btn}>去支付</button>
    </div>
  )
}

export default Bar