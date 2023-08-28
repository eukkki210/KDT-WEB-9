const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// 웹소켓 서버 접속
const wss = new ws.Server({ server });
// 브라우저(클라이언트)들을 담을 배열 변수
const sockets = [];

// socket 변수는 저복한 브라우저
wss.on("connection", (socket) => {
    console.log(wss.clients);
    console.log("클라이언트가 연결되었습니다.");
    // 클라이언트 상태 확인
    // ws.CONNECTING: 0 웹소켓이 연결 시도 중
    // ws.OPEN: 1 웹소켓이 열린 상태
    // ws.CLOSING: 2 웹소켓이 닫히는 중 
    // ws.CLOSED: 3 웹소켓이 닫힌 상태 
    // socket.readyState: 웹소켓의 클라이언트 상태를 나타내는 속성
    console.log(ws.OPEN);
    // sockets 배열에 브라우저 정보 추가
    // sockets.push(socket);
    // 메세지 이벤트
    socket.on("message", (message) => {
        // 웹소켓을 통해 클라이언트와 서버 간의 데이터를 주고 받을 때는 
        // 일반적으로 문자열 또는 Buffer 형태로 전달됨 
        // 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를
        //  일련의 바이트로 변환하는 직렬화 과정이 필요 => Buffer를 쓰는 이유
        console.log(`클라이언트로부터 받은 메시지: ${message}`);
        const msg = JSON.parse(message);
        console.log(msg)
        // 클라이언트로 응답 메시지 전송
        // socket.send(`서버에서 받은 메시지: ${message}`);
        wss.clients.forEach(elem => {
            elem.send(`${msg.name}: ${msg.message}`);
        })
    });
    // 오류 이벤트
    socket.on("error", (error) => {
        console.error("오류가 발생했습니다.", error);
    });
    // 접속종료 이벤트
    socket.on("close", () => {
        console.log("클라이언트와 연결이 종료되었습니다.");
    });
});