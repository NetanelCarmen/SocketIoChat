exports = module.exports = function(io) {
	let ChatLists = {};

	io.on("connection", socket => {
		const { chatRoomName, username } = socket.handshake.query;
		console.log(username, "made socket connection", socket.id, "to room", chatRoomName);

		socket.join(chatRoomName)
		socket.broadcast.to(chatRoomName).emit("connecting", username);
		io.of('/').in(chatRoomName).clients((error, clients) => {
			if (error) throw error;

			console.log(clients);
			socket.to(socket.id).emit("allConnectedUsers", clients);
		});

		
		socket.on("/", function(data) {
			console.log("connection in /");
		});

		// Handle chat event
		socket.on("chat", function(data) {
			const dataToSent = {
				...data,
				sendFrom: socket.id
			};
			console.log(dataToSent);
			socket.broadcast.to(chatRoomName).emit("chat", dataToSent);
		});

		socket.on("typing", function(data) {
			const dataToSent = {
				...data,
				sendFrom: socket.id
			};
			socket.broadcast.to(chatRoomName).emit("typing", dataToSent);
		});

		socket.on("disconnect", () => {
			socket.disconnect();
			socket.broadcast.to(chatRoomName).emit("disconnected", username);	
			console.log(username, "socket disconnect", socket.id, "from room", chatRoomName);
		});
	});
};
