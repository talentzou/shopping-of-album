import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import classes from "./filter.module.css"

const FilterAlbum = (props) => {
    const textHandler = (e) => {
        const keyword = e.target.value
        props.onFilter(keyword)
    }
    return (
        <div className={classes.filterWrap}>
            <div className={classes.inputWrap}>
                <input
                    type="text"
                    onChange={textHandler}
                    className={classes.searchInput}
                    placeholder={"请输入关键字"}></input>
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.iconSearch}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default FilterAlbum
