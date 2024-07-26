import React, { useEffect, useRef } from "react"
import { MessageInput } from "./UI/inputs/MessageInput.jsx"

export const ChatField = (props) => {


    return (<div className="chatField">
        <div className="chatContent">
            {props.messages.map((mess, index) => <div key={index}>
                <span>{mess.content}</span>
            </div>)}
        </div>
        <MessageInput></MessageInput>
    </div>)
}