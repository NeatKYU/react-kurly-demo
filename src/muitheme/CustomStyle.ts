import { createTheme } from "@mui/material/styles";

export const customButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
					fontSize: '10px'
				}
      }
    }
  },
  palette: {
    primary: {
      main: "#C0C0C0"
    }
  }
});