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
    socket.on('hello_message', (arg) => {
        console.log(arg);
        socket.emit('backend_hello', arg);
    });

    socket.on('study_message', (arg) => {
        console.log(arg);
        socket.emit("backend_study", arg);
    });

    socket.on('bye_message', (arg) => {
        console.log(arg);
        socket.emit("backend_bye", arg);
    });
});

// 서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});