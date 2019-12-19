var app = require("express")();
var socket = require("socket.io");

var server = app.listen(8080, () => {
	console.log("start server at port 8080");
});

const io = socket(server);
var chatSocket = require("./Routes/chat")(io);

const authenticationRouter = require("./Routes/authentication");
app.use(authenticationRouter);
