import { createMuiTheme } from '@material-ui/core/styles';
import { red100, red300, red500, green100, green300, green500, blue100, blue300, blue500, darkWhite } from 'material-ui/styles/colors';

const defaultTheme = {
    palette: {
        primary: {  
          light: blue100,
          main: blue300,
          dark: blue500,
          contrastText: darkWhite,
        },
        secondary: {
          light: green100,
          main: green300,
          dark: green500,
          contrastText: darkWhite,
        },
        error: {
          light: red100,
          main: red300,
          dark: red500,
          contrastText: darkWhite,
        },
      },
  }

export default {
    default: createMuiTheme( { defaultTheme }),
};