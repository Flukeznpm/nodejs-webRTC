const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const cors = require('cors');

app.use(cors());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

io.on('connection', socket => {
	const users = {};

	console.log('Client socket connected..');
	console.log('socket.id: ', socket.id);

	// if (!users[socket.id]) {
	// 	users[socket.id] = { id: socket.id };
	// }
	// socket.emit("id_report", socket.id);
	// io.sockets.emit("online_users_report", users);

	// socket.on("call_someone", (data) => {
	// 	io.to(data.callId).emit('someone_calling', { signal: data.data, from: data.callerId });
	// })

	// socket.on("accept_calling", (data) => {
	// 	io.to(data.to).emit('call_accepted', data.signal);
	// })

	// socket.on('disconnect', () => {
	// 	delete users[socket.id];
	// 	io.sockets.emit("online_users_report", users);
	// })
});

server.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));