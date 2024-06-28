import { Typography, styled } from "@mui/material";
import { Box } from "@mui/material";

export const HeaderContent = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "21px",
  color: "#FFFFFF",
}));

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  height: "2.5rem",
  width: "100vw",
  background: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
