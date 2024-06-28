import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
    },
    secondary: { main: "#FFFFFF" },
    background: {
      default:
        "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
    },
    text: { primary: "#102851", secondary: "#212121", disabled: "#3c3c3c" },
  },
  typography: {
    fontFamily: "Poppins",
    body1: {
      fontFamily: "Poppins",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Poppins",

      borderRadius: "8px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Poppins",
          color: "#FFFFFF",
          borderRadius: "8px",
          fontWeight: 500,
          fontSize: "21px",
        },
      },
    },
  },
});

export default theme;
