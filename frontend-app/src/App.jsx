import { useContext, useState, createContext, useRef, useEffect } from 'react'
import { ChatField }  from './components/ChatField.jsx'
import {io} from "socket.io-client"

export const SocketContext = createContext('')

function App() {
	const socket = useRef()

    useEffect(() => {
        socket.current = io("http://localhost:8000")
    }, [])

	let messs = [
		{"content":"hi"},
		{"content":"hello"},
		{"content":"how do u "},
		{"content":"52"},
		{"content":"42"},
		{"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
		{"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
		{"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
		{"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
		{"content":"Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
		{"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
		{"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
		{"content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima itaque nostrum reprehenderit voluptates impedit corporis accusantium incidunt saepe, in veritatis ad. Incidunt repellendus qui non est? Sapiente perspiciatis explicabo suscipit dolorum eligendi ratione quis recusandae! Alias animi magnam magni, officiis illum minima reiciendis accusantium velit omnis quibusdam inventore quam perferendis libero corrupti blanditiis totam repudiandae in odit atque. Rem ad id repudiandae, consequuntur ea quis aliquid eius iste sunt deleniti tenetur minus sapiente vero facere, aperiam assumenda doloribus ut pariatur. Obcaecati asperiores cum nulla maiores nihil facere. Repudiandae amet, minus assumenda maxime eos dolore eveniet ab accusamus sit sint?"},
	]

	return (
		<SocketContext.Provider value={socket}>
			<ChatField messages = {messs}></ChatField>
		</SocketContext.Provider>

	)
}

export default App
