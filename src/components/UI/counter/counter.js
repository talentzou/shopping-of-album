import React from "react"
import className from "./counter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import CartContext from "../../../store/CartContext"
import { useContext } from "react"
/* 
安装fontAwesome 字体图标
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
1.引入组件
2.引入图标，
3.设置组件图表属性

*/
/* 计数器组件 */
const Counter = (props) => {
    const ctx = useContext(CartContext)
    //增加按钮
    const addHandler = () => {
        //  console.log(ctx);
        // console.log('111');
        ctx.addItem(props.album)
    }
    //减少按钮
    const reduceHandler = () => {
        // console.log('2222');
        ctx.removeItem(props.album)
    }
    return (
        <div className={className.counter}>
            {props.album.amount && props.album.amount !== 0 ? (
                <>
                    <button
                        className={className.reduce}
                        onClick={reduceHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={className.count}>{props.album.amount}</span>
                </>
            ) : null}

            <button
                className={className.add}
                onClick={addHandler}>
                {" "}
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default Counter
