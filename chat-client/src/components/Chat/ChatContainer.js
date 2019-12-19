import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./ChatContainerStyle.js";
import { connectSocketToServer } from "../socket";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Authentication from "../authentication";

const ChatContainer = props => {
	const classes = useStyles();
	const history = useHistory();
	const { chatRoomName, username } = props;

	if (Authentication.isAuthenticated) {
		connectSocketToServer(chatRoomName, username);
	} else {
		history.push("/");
	}

	return Authentication.isAuthenticated ? (
		<div className={classes.chatContainer}>
			<Header chatRoomName={chatRoomName} />
			<Body chatRoomName={chatRoomName} username={username} />
		</div>
	) : (
		<div />
	);
};

export default ChatContainer;
