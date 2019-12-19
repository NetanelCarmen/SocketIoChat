import React from "react";
import { useStyles } from "./HeaderStyle.js";

const Header = props => {
	const classes = useStyles();
	const { chatRoomName } = props;

	return (
		<div>
			<h2 className={classes.h2}>{chatRoomName} Chat</h2>
			<div className={classes.participate}></div>
		</div>
	);
};

export default Header;
