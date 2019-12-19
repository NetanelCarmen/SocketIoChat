import React, { useState, useEffect } from "react";
import { useStyles } from "./BodyStyle.js";
import { emitMessage, subscribeArrayDataToSocketEvent } from "../../socket";

const Body = props => {
	const classes = useStyles();

	const { chatRoomName, username } = props;

	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const [feedback, setFeedback] = useState([]);
	const [connectedUsers, setConnectedUsers] = useState([]);
	let messageInput = {};

	const updateMessage = event => {
		setMessage(event.target.value);
	};

	const addMessage = (username, message, isMine) => {
		let newServerMessages = [...messages];
		newServerMessages.push({ username, message, isMine });
		setMessages(newServerMessages);
	};

	const brodcastMessage = () => {
		if (message) {
			addMessage(username, message, true);
			emitMessage("chat", { chatRoomName, message, username });
			setMessage("");
			setFeedback();
		}
	};

	const brodcastTyping = () => {
		if (event.key === "Enter" && message) {
			brodcastMessage();
		} else if (message) {
			emitMessage("typing", { chatRoomName, username });
		}
	};

	const getMessageFromServer = ({ chatRoomName, username, message }) => {
		setFeedback();
		addMessage(username, message, false);
	};

	const someoneTyping = data => {
		setFeedback(
			<p>
				<em>{data.username} is typing a message...</em>
			</p>
		);
	};

	const someoneConnected = username => {
		let newConnectedUsers = [...connectedUsers];
		newConnectedUsers.push(username);
		setConnectedUsers(newConnectedUsers);
	};

	const someonedisconnect = username => {
		let newConnectedUsers = [...connectedUsers];
		newConnectedUsers.pop(username);
		setConnectedUsers(newConnectedUsers);
	};

	const getAllConnectedUsers = users => {
		// newConnectedUsers.pop(username);
		console.log(users);
		setConnectedUsers(users);
	};

	useEffect(() => {
		messageInput.focus();
		subscribeArrayDataToSocketEvent("chat", getMessageFromServer);
		subscribeArrayDataToSocketEvent("typing", someoneTyping);
		subscribeArrayDataToSocketEvent("connecting", someoneConnected);
		subscribeArrayDataToSocketEvent("disconnected", someonedisconnect);
		subscribeArrayDataToSocketEvent(
			"allConnectedUsers",
			getAllConnectedUsers
		);
	}, [messages, connectedUsers]);

	return (
		<div className={classes.body}>
			<div className={classes.userConnected}>
				{connectedUsers.map((username, index) => {
					return <div key={index}>{username},</div>;
				})}
			</div>
			<div className={classes.chatBox}>
				<div className={classes.output}>
					{messages.map((currMessage, index) => {
						let inlineStyle = {};
						let senderStyle = {};

						if (currMessage.isMine) {
							inlineStyle = {
								paddingRight: "10px",
								alignSelf: "flex-end"
							};

							senderStyle = {alignSelf: "flex-end"};
						}

						return (
							<p
								style={inlineStyle}
								key={index}
								className={classes.p}
							>
								<div style={senderStyle} className={classes.messageSender}>
									{currMessage.username}
								</div>
								<strong className={classes.strong}>
									{currMessage.message}
								</strong>
							</p>
						);
					})}
				</div>
				<div className={classes.feedback}>{feedback}</div>
			</div>
			<input
				ref={input => (messageInput = input)}
				value={message}
				onChange={updateMessage}
				className={classes.input}
				onKeyPress={brodcastTyping}
				placeholder='Message'
			/>
			<button onClick={brodcastMessage} className={classes.button}>
				Send
			</button>
		</div>
	);
};

export default Body;
