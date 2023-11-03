import React from "react";
//状态管理器
/* 
使用方式，1.引入context
         2.使用xxxx.Consumer标签；标签使用回调函数.content作为回调参数传入，通过参数访问context内容

             <xxxx.Consumer>
             (context)=>{}
             </xxxx.Consumer>
*/

//使用方式二钩子函数
/* 
1.引入context
const ctx=useContext(context)


*/
const CartContext=React.createContext({
    totalAmount: 0,
    totalPrice: 0,
    itemList: [],
    addItem:()=>{},
    removeItem:()=>{}
})
export default CartContext