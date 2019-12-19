import { makeStyles } from "@material-ui/core/styles";
import Themes from "../../../config";

export const useStyles = makeStyles(theme => ({
	body: {
		borderRadius: "0px 11px"
	},
	chatBox: {
		backgroundColor: Themes.default.palette.primary.light,
		height: "400px",
		overflow: "auto",
	},
	massages: {
		flexGrow: 1
	},
	input: {
		padding: "10px 20px",
		boxSizing: "border-box",
		background: "#eee",
		border: 0,
		display: "block",
		width: "100%",
		background: "#fff",
		borderBottom: "1px solid #eee",
		fontFamily: "Nunito",
		fontSize: "16px"
	},
	output: {
		paddingLeft: "9px",
		paddingRight: "9px",
		display: "flex",
		flexDirection: "column",
	},
	p: {
		margin: "11px 0px 0px 0px",
		color: "#555",
		backgroundColor: "#ffffff7a",
		padding: "5px 14px",
		borderRadius: "15px",
		alignSelf: "flex-start",
		display: "flex",
		flexDirection: "column"
	},
	strong: {
		color: "#000"
	},
	feedback: {
		fontWeight: "900",
		color: "#494949",
		margin: "0 12px"
	},
	button: {
		background: "#575ed8",
		color: "#fff",
		fontSize: "18px",
		border: 0,
		padding: "12px 0",
		width: "100%",
		borderRadius: "0 0 2px 2px",
		cursor: "pointer",
		borderRadius: "0px 0px 11px 11px"
	},
	userConnected: {
		display: "flex",
		color: "white",
		overflow: "auto",
		backgroundColor: "#7986cbd9"
	},
	message: {
		backgroundColor: "#ffffff66",
		padding: "6px 12px",
		borderRadius: "15px"
	},
	messageSender: {
		fontSize: "10px",
	}
}));
