import { styled, Box } from "@mui/material";

export const TitleText = styled(Box)((theme) => ({
  height: "250px",
  margin: "5rem 0 0 0",

  "& > :nth-child(1)": {
    color: "#102851",
    fontFamily: "Poppins",
    fontSize: "31px",
    fontWeight: 500,
    lineHeight: "68px",
    letterSpacing: " 0.02em",
    textAlign: "left",
  },
  "& > :nth-child(2)": {
    // color: theme.palette.secondary.main,
    fontSize: "56px",
    fontWeight: 700,
  },
  "& > :nth-child(3)": {
    // color: theme.palette.text.secondary,
    fontSize: "20px",
    color: "#5C6169",
    lineHeight: "32px",
    letterSpacing: "2%",
  },

  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "flex-start",
}));
