import { Box, styled } from "@mui/material";

export const NavbarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "2rem",
  margin: "0 8.5rem",
  flexWrap: "wrap",
}));

export const NavItems = styled(Box)(({ theme }) => ({}));
