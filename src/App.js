import React from "react"
import Album from "./components/album/album"
import { useState } from "react"
import CartContext from "./store/CartContext"
import FilterAlbum from "./components/filterAlbum/filter"
import Cart from "./components/Cart/Cart"
// import BackDrop from "./components/UI/backDrop/backDrop"
// <BackDrop></BackDrop>
//移动端适配
document.documentElement.style.fontSize = 100 / 750 + "vw"
const App = () => {
    //商品数据
    const artists = [
        { id: "01", singer: "陈奕迅", album: "单车", count: 1, img: "./img/cyx1.png", price: 20 },
        { id: "02", singer: "陈奕迅", album: "十年", count: 3, img: "./img/cyx2.png", price: 20 },
        { id: "03", singer: "邓紫棋", album: "面壁者", count: 6, img: "./img/dzq1.png", price: 20 },
        { id: "04", singer: "邓紫棋", album: "句号", count: 8, img: "./img/dzq2.png", price: 20 },
        { id: "05", singer: "邓紫棋", album: "来自天堂的魔鬼", count: 5, img: "./img/dzq3.png", price: 20 },
        { id: "06", singer: "王心凌", album: "爱你", count: 1, img: "./img/wxl.png", price: 20 },
        { id: "07", singer: "周杰伦", album: "青花瓷", count: 7, img: "./img/zjl.png", price: 20 },
    ]
    //购物车数据
    const cart = {
        totalAmount: 0,
        totalPrice: 0,
        itemList: [],
    }
    let [albumData, setAlbumDataState] = useState(artists)
    let [cartData, setCartDataState] = useState(cart)
    /* 添加购物车商品 */
    const addItem = (album) => {
        // console.log(" 添加购物车商品")
        const newCart = { ...cartData }
        //购物车是否存在商品
        if (!newCart.itemList.includes(album)) {
            newCart.itemList.push(album)
            //数量添加
            album.amount = 1
        } else {
            album.amount += 1
        }
        //增加总数
        newCart.totalAmount += 1
        //总价格
        newCart.totalPrice += album.price
        //页面数据刷新
        setCartDataState(newCart)
    }
    /* 减少购物车商品 */
    const removeItem = (album) => {
        // console.log("减少购物车商品")
        const newCart = { ...cartData }
        album.amount -= 1
        //潘墩数量是否为0
        if (album.amount === 0) {
            newCart.itemList.splice(newCart.itemList.indexOf(album), 1)
        }
        //增加总数
        newCart.totalAmount -= 1
        //总价格
        newCart.totalPrice -= album.price
        //页面数据刷新
        setCartDataState(newCart)
    }

    /* 过滤处理函数 */
    const textFilter = (keyWord) => {
        const newData = artists.filter((item) => item.singer.includes(keyWord) || item.album.includes(keyWord))
        setAlbumDataState(newData)
    }
    /* 清空购物车列表 */
    const clearCart = () => {
        setCartDataState({
            ...cart,
            totalAmount: 0,
            totalPrice: 0,
            itemList: [],
        })
        setAlbumDataState((old) =>
            old.map((item) => {
                return { ...item, amount: 0 }
            })
        )
    }
    /* 数据生产者，配合context使用

    xxxx.Provider表示数据生产者；通过value指定context存储的数据，这样所有子组件就可以访问他指定的数据；子组件访问数据时，
    首先读取离他最近的xxxx.Provide数据，如果没有，就访问他默认·的数据
     <CountContext.Provider  value={}></CountContext.Provider>
    
    */
    return (
        <CartContext.Provider value={{ ...cartData, addItem, removeItem, clearCart }}>
            <div>
                <FilterAlbum onFilter={textFilter}></FilterAlbum>
                <Album albumData={albumData} />
                <Cart></Cart>
            </div>
        </CartContext.Provider>
    )
}
export default App
