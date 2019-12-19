import React, { useState, useEffect } from "react";
import ChatContainer from "./Chat/ChatContainer";
import Login from "./Authenticating/Login/Login";
import { useStyles } from "./AppStyle.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { socketDisconnect } from "./socket";

const App = props => {
	const classes = useStyles();

	const [chatRoomName, setChatRoomName] = useState("");
	const [username, setUsername] = useState("");

	useEffect(() => {
		return () => {
			socketDisconnect();
		};
	}, []);

	return (
		<Router>
			<div className={classes.app}>
				<Switch>
					<Route exact path='/'>
						<Login saveRoomName={setChatRoomName} saveUsername={setUsername} />
					</Route>
					<Route path='/chat'>
						<ChatContainer chatRoomName={chatRoomName} username={username}/>
					</Route>
					<Redirect from='*' to='/' />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
