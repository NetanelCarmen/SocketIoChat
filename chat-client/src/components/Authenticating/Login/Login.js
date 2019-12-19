import React, { useState, useEffect } from "react";
import { useStyles } from "./LoginStyle.js";
import { Link, useHistory } from "react-router-dom";
import Authentication from "../../authentication";

const Login = props => {
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		usernameInput.focus();
	}, [usernameInput, passwordInput]);

	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	let usernameInput = {};
	let passwordInput = {};

	const changePassword = event => {
		setPassword(event.target.value);
	};

	const changeUsername = event => {
		setUsername(event.target.value);
	};

	const saveInputs = event => {
		itemRequierd(passwordInput);
		itemRequierd(usernameInput);

		if (!password && !username) {
			event.preventDefault();
		} else {
			Authentication.authenticate(() => {
				props.saveRoomName(password);
				props.saveUsername(username);
			});
		}
	};

	const keyPressed = event => {
		if (event.key === "Enter") {
			itemRequierd(passwordInput);
			itemRequierd(usernameInput);

			if (password && username) {
				Authentication.authenticate(() => {
					props.saveRoomName(password);
					props.saveUsername(username);
					history.push("/chat");
				});
			}
		}
	};

	const itemRequierd = input => {
		if(input.value === "")
			input.classList.add(classes.requierd);
		else
			input.classList.remove(classes.requierd);
	};

	return (
		<div className={classes.loginContainer}>
			<div className={classes.login}>
				<h2 className={classes.h2}>Log In</h2>
				<div className={classes.inputName}>Username</div>
				<input
					ref={input => {
						usernameInput = input;
					}}
					value={username}
					onChange={changeUsername}
					onKeyPress={keyPressed}
					className={classes.input}
				/>
				<div className={classes.inputName}>Password</div>
				<input
					ref={input => {
						passwordInput = input;
					}}
					value={password}
					onChange={changePassword}
					onKeyPress={keyPressed}
					className={classes.input}
				/>
				<Link to='/chat' className={classes.link} onClick={saveInputs}>
					Log In
				</Link>
			</div>
		</div>
	);
};

export default Login;
