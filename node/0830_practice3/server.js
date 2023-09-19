const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:room', (req, res) => {
    const room = req.params.room;
});

// Rooms and users data
const roomList = [];

// Function to get users in a room
function getUsersInRoom(room) {
    const users = [];
    const clients = io.sockets.adapter.rooms.get(room);
    if (clients) {
        clients.forEach((socketId) => {
            const userSocket = io.sockets.sockets.get(socketId);
            users.push(userSocket.user);
        });
    }
    return users;
}

function updateRoomList() {
    io.emit('roomList', roomList);
}

function updateUserList(roomName) {
    const usersInRoom = getUsersInRoom(roomName);
    io.to(roomName).emit('userList', usersInRoom);
}

io.on('connection', (socket) => {
    console.log("server Socket Connected", socket.id);
    io.emit("notice", `${socket.id}님이 입장하셨습니다.`);

    socket.emit('roomList', roomList);

    socket.on('create', (roomName, userName, cb) => {
        socket.join(roomName);
        socket.room = roomName;
        socket.user = userName;

        if (!roomList.includes(roomName)) {
            roomList.push(roomName);
            updateRoomList();
        }

        updateUserList(roomName);
        cb();
    });

    socket.on('sendMessage', (message) => {
        if (message.to === 'all') {
            io.to(socket.room).emit('newMessage', message.message, message.author);
        } else {
            const targetSocket = Object.values(io.sockets.sockets).find((sock) => sock.user === message.to);

            if (targetSocket) {
                targetSocket.emit('dmMessage', message.message, message.author);
            }
        }
    });

    socket.on('sendDM', (message) => {
        console.log('Received DM:', message);

        const targetSocket = Object.values(io.sockets.sockets).find((sock) => sock.user === message.to);

        if (targetSocket) {
            targetSocket.emit('dmMessage', message.message, message.author);
        }
    });

    socket.on('disconnect', () => {
        if (socket.room) {
            socket.leave(socket.room);
            updateUserList(socket.room);
        }
    });
});

server.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
