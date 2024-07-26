import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import Server from 'socket.io'
import { createServer } from 'http'

const PORT = process.env.PORT || 8000

let corsOptions = {
    origin: [
        'http://localhost:5173/',
    ],
    methods: ["GET", "POST"],
}

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors:corsOptions,
});


app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

io.on("connection", socket => {
    console.log(socket.id)

    socket.on('send_message', data => {
        console.log(data)
        // socket.broadcast.emit("do_make_move", {
        //     "whoismove":chessAPIMain.whoismove
        // })
        // socket.emit("do_make_move", {
        //     "whoismove":chessAPIMain.whoismove
        // })
    })
})

server.listen(PORT, () => {
    console.log(`server has been started. Port is ${PORT}`)
})