import { Paper, styled } from "@mui/material";

export const SearchPaper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  elevation: 3,
  borderRadius: "15px",
  height: "429px",
  margin: "0 8.5rem 0 8.5rem",
  width: `calc(100vw - 2 * 8.5rem)`,
  top: "65vh",
}));
