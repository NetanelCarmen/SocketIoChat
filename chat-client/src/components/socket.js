import io from "socket.io-client";

let socket = null;

const connectSocketToServer = (chatRoomName, username) => {
	socket = io("http://localhost:8080", {
		query: {
			chatRoomName: chatRoomName,
			username: username
		}
	});
};

const emitMessage = (event, dataToSent) => {
	socket.emit(event, dataToSent);
};

const subscribeArrayDataToSocketEvent = (event, funcToTrigger) => {
	socket.on(event, data => {
		funcToTrigger(data);
	});
};

const socketDisconnect = () => {
	socket.close();
};

export {
	emitMessage,
	socketDisconnect,
	subscribeArrayDataToSocketEvent,
	connectSocketToServer
};
