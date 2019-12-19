import React, { useState, useEffect } from "react";
import { useStyles } from "./LoginStyle.js";
import { Link, useHistory } from "react-router-dom";
import Authentication from "../../authentication";

const Login = props => {
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		usernameInput.focus();
		roomNameInput.focus();
	}, [usernameInput, roomNameInput]);

	const [chatRoomName, setChatRoomName] = useState("");
	const [username, setUsername] = useState("");
	let usernameInput = {};
	let roomNameInput = {};

	const changeRoomName = event => {
		setChatRoomName(event.target.value);
	};

	const changeUsername = event => {
		setUsername(event.target.value);
	};

	const saveInputs = event => {
		if (!chatRoomName && !username) {
			event.preventDefault();
		} else {
			Authentication.authenticate(() => {
				props.saveRoomName(chatRoomName);
				props.saveUsername(username);
			});
		}
	};

	const keyPressed = event => {
		if (event.key === "Enter" && chatRoomName && username) {
			Authentication.authenticate(() => {
				props.saveRoomName(chatRoomName);
				props.saveUsername(username);
				history.push("/chat");
			});
		}
	};

	return (
		<div className={classes.loginContainer}>
			<div className={classes.login}>
				<h2 className={classes.h2}>Log In To Room Chat</h2>
				<input
					ref={input => {
						roomNameInput = input;
					}}
					value={chatRoomName}
					onChange={changeRoomName}
					onKeyPress={keyPressed}
					className={classes.input}
					placeholder='Room name'
					required
				/>
				<input
					ref={input => {
						usernameInput = input;
					}}
					value={username}
					onChange={changeUsername}
					onKeyPress={keyPressed}
					className={classes.input}
					placeholder='User Name'
					required
				/>
				<Link
					to='/chat'
					className={classes.link}
					onClick={saveInputs}
				>
					Log In
				</Link>
			</div>
		</div>
	);
};

export default Login;
