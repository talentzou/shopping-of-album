import React, { useContext } from "react"
import AlbumItem from "./Item/albumItem"
import className from "./album.module.css"

const album = (props) => {
    const list=props.albumData?.map(item=><AlbumItem list={item} key={item.id}/>)
    return (
        <div className={className.albums}>
         {list}
        </div>
    )
}

export default album
