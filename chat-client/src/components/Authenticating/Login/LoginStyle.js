import { makeStyles } from "@material-ui/core/styles";
import Themes from "../../../config";

export const useStyles = makeStyles(theme => ({
	loginContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center"
	},
	login: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#d0d0d0",
		width: "300px",
        borderRadius: '11px'
	},
	h2: {
		textAlign: "center",
		fontSize: "18px",
		padding: "10px 11px 6px",
		color: "#575ed8"
	},
	input: {
		padding: "10px 20px",
		boxSizing: "border-box",
		background: "#eee",
		border: 0,
		display: "block",
		width: "280px",
		background: "#fff",
		borderBottom: "1px solid #eee",
		fontFamily: "Nunito",
		fontSize: "16px",
		borderColor: "#d0d0d0",
		flexGrow: 1,
		'&:invalid': {
			backgroundColor: "#ffa5a5",
		},
		'&:valid': {
			backgroundColor: "#eee",
		}
	},
	inputName:{
		alignSelf: "flex-start",
		margin: "11px 11px 5px"
	},
	link: {
        textDecoration: 'none',
		background: "#575ed8",
		color: "#fff",
		fontSize: "18px",
		border: 0,
		padding: "12px 0",
		width: "100%",
		borderRadius: "0 0 2px 2px",
		cursor: "pointer",
		borderRadius: "0px 0px 11px 11px",
		flexGrow: 1,
		marginTop: "10px"
	},
	requierd: {
		border: "solid 1.3px red",
	}
}));
