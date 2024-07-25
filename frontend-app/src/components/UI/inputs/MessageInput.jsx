import React from "react"
import classes from './MessageInput.module.css'

export const MessageInput = (props) => {
    return (<input className={classes.MessageInput} placeholder="Введите сообщение..."></input>)
}