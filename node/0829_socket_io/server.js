const http = require('http');
const express = require('express');
const SocketIO = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

io.on('connection', (socket) => {
    socket.on('open_message', (arg) => {
        console.log(arg);
    });

    socket.on('form_message', (arg) => {
        console.log(arg);
        socket.emit("backend_message", arg);
    });
});

// 서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});