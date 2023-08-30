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

app.get('/chat', (req, res) => {
    res.render('chat');
});

io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms);

    socket.on("join", (res) => {
        // 채팅방을 생성하는 방법은 join(방id) 사용. 방이 존재하면 그 방으로 접속
        socket.join(res);
        socket.room = res;
        console.log('조인 후', socket.rooms);
    });

    socket.on('message', (res) => {
        const messageData = {
            message: res.message,
            senderId: socket.id
        };
        // 같은 방에 있는 클라이언트에게 메시지 전달
        io.to(socket.room).emit('chat', messageData);
    });

    socket.on('leave', () => {
        socket.leave(socket.room);
    });

    socket.on('disconnect', () => {
        // 클라이언트가 연결을 끊을 때 처리할 코드
    });
});

// 서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
