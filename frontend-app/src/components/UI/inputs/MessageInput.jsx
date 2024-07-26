import {React, useEffect, useRef, useContext} from "react"
import classes from './MessageInput.module.css'
import { SocketContext } from "../../../App.jsx"
import io from "socket.io-client"


const socket = io.connect("http://localhost:8000")
export const MessageInput = (props) => {
    const inputMessage = useRef()

    function handlerMessage(e){
        e.preventDefault()
        console.log(inputMessage.current.value)
        socket.emit('send_message', {"data": inputMessage.current.value})
        inputMessage.current.value = ''
    }

    return (<form className="form-message"><input
            className="input-message"
            placeholder="Введите сообщение..."
            ref={inputMessage}>
        </input>
        <button className="send-message" onClick={e => {handlerMessage(e)}}>Отправить</button>
    </form>)
}