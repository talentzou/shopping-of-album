import React from 'react'
import ReactDOM from 'react-dom'
import classes from './backDrop.module.css'
const backDrop=document.getElementById('backdrop-root')
const BackDrop = (props) => {
  return (
     ReactDOM.createPortal(<div className={`${classes.backDrop} ${props.className}`}>{props.children}</div>,backDrop)
  )
}

export default BackDrop